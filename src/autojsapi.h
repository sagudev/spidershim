// Copyright Mozilla Foundation. All rights reserved.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

#pragma once

#include <jsapi.h>
#include <assert.h>
#include "v8.h"
#include "conversions.h"
#include "util.h"

// neddes?
// All callsittes calling into SpiderMonkey MUST have a AAutoJSAPI on the stack.
class AAutoJSAPI : private JSAutoRealm {
 public:
  AAutoJSAPI(JSContext* cx, JSObject* obj) :
    JSAutoRealm(cx, obj) {
    init();
  }
  AAutoJSAPI(JSContext* cx, const JSObject* obj) :
    JSAutoRealm(cx, const_cast<JSObject*>(obj)) {
    init();
  }
  template <class T>
  AAutoJSAPI(JSContext* cx, T* val) :
    AAutoJSAPI(cx, v8::GetObject(val)) {
  }
  template <class T>
  AAutoJSAPI(JSContext* cx, v8::Local<T> val) :
    AAutoJSAPI(cx, val.IsEmpty() ? v8::GetObject(v8::Isolate::GetCurrent()->GetCurrentContext().IsEmpty() ?
                                                v8::Isolate::GetCurrent()->GetHiddenGlobal() :
                                                v8::Isolate::GetCurrent()->GetCurrentContext()->Global()) :
                                  v8::GetObject(val)) {
  }
  AAutoJSAPI(JSContext* cx, v8::Isolate* isolate) :
    AAutoJSAPI(cx, v8::GetObject(isolate->GetCurrentContext().IsEmpty() ?
                                isolate->GetHiddenGlobal() :
                                isolate->GetCurrentContext()->Global())) {
  }
  AAutoJSAPI(JSContext* cx) :
    AAutoJSAPI(cx, v8::Isolate::GetCurrent()) {
  }
  AAutoJSAPI(JSObject* obj) :
    AAutoJSAPI(JSContextFromIsolate(v8::Isolate::GetCurrent()), obj) {
  }
  AAutoJSAPI(v8::Value* val) :
    AAutoJSAPI(JSContextFromIsolate(v8::Isolate::GetCurrent()), val) {
  }
  AAutoJSAPI(const v8::Value* val) :
    AAutoJSAPI(JSContextFromIsolate(v8::Isolate::GetCurrent()), val) {
  }
  AAutoJSAPI() :
    AAutoJSAPI(JSContextFromIsolate(v8::Isolate::GetCurrent())) {
  }
  ~AAutoJSAPI() {
    auto isolate = v8::Isolate::GetCurrent();
    isolate->AdjustCallDepth(-1);
    HandleExistingException(JSContextFromIsolate(isolate));
    if (scriptCall_) {
      auto policy = isolate->GetMicrotasksPolicy();
      if (policy == v8::MicrotasksPolicy::kAuto &&
          !isolate->IsMicrotaskExecutionSuppressed() &&
          isolate->GetCallDepth() == 0) {
        isolate->RunMicrotasks();
      }
      if (policy == v8::MicrotasksPolicy::kScoped) {
        assert(isolate->GetMicrotaskDepth() ||
               isolate->GetMicrotaskDebugDepth());
      }
    }
  }

  void BleedThroughExceptions() { ignoreException_ = true; }
  void MarkScriptCall() { scriptCall_ = true; }

 private:
  void init() {
    v8::Isolate::GetCurrent()->AdjustCallDepth(+1);
  }
  void HandleExistingException(JSContext* cx) {
    if (!ignoreException_ &&
        !v8::Isolate::GetCurrent()->GetTopmostTryCatch() &&
        JS_IsExceptionPending(cx)) {
      v8::ReportException(cx);
    }
  }
  bool ignoreException_ = false;
  bool scriptCall_ = false;
};

