use super::noop::NoopConsumer;
use super::plumbing::*;
use super::*;
use std::cmp::min;

/// `Skip` is an iterator that skips over the first `n` elements.
/// This struct is created by the [`skip()`] method on [`IndexedParallelIterator`]
///
/// [`skip()`]: trait.IndexedParallelIterator.html#method.skip
/// [`IndexedParallelIterator`]: trait.IndexedParallelIterator.html
#[must_use = "iterator adaptors are lazy and do nothing unless consumed"]
#[derive(Debug, Clone)]
pub struct Skip<I> {
    base: I,
    n: usize,
}

impl<I> Skip<I>
where
    I: IndexedParallelIterator,
{
    /// Create a new `Skip` iterator.
    pub(super) fn new(base: I, n: usize) -> Self {
        let n = min(base.len(), n);
        Skip { base, n }
    }
}

impl<I> ParallelIterator for Skip<I>
where
    I: IndexedParallelIterator,
{
    type Item = I::Item;

    fn drive_unindexed<C>(self, consumer: C) -> C::Result
    where
        C: UnindexedConsumer<Self::Item>,
    {
        bridge(self, consumer)
    }

    fn opt_len(&self) -> Option<usize> {
        Some(self.len())
    }
}

impl<I> IndexedParallelIterator for Skip<I>
where
    I: IndexedParallelIterator,
{
    fn len(&self) -> usize {
        self.base.len() - self.n
    }

    fn drive<C: Consumer<Self::Item>>(self, consumer: C) -> C::Result {
        bridge(self, consumer)
    }

    fn with_producer<CB>(self, callback: CB) -> CB::Output
    where
        CB: ProducerCallback<Self::Item>,
    {
        return self.base.with_producer(Callback {
            callback,
            n: self.n,
        });

        struct Callback<CB> {
            callback: CB,
            n: usize,
        }

        impl<T, CB> ProducerCallback<T> for Callback<CB>
        where
            CB: ProducerCallback<T>,
        {
            type Output = CB::Output;
            fn callback<P>(self, base: P) -> CB::Output
            where
                P: Producer<Item = T>,
            {
                let (before_skip, after_skip) = base.split_at(self.n);
                bridge_producer_consumer(self.n, before_skip, NoopConsumer);
                self.callback.callback(after_skip)
            }
        }
    }
}
