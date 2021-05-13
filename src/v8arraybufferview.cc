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

#include "v8.h"
#include "conversions.h"
#include "v8local.h"
#include "autojsapi.h"
#include "jsfriendapi.h"
#include "js/Array.h"

namespace v8 {

Local<ArrayBuffer> ArrayBufferView::Buffer() {
  Isolate* isolate = GetIsolate();
  JSContext* cx = JSContextFromIsolate(isolate);
  AAutoJSAPI jsAPI(cx, this);
  JS::RootedObject view(cx, GetObject(this));
  bool shared;
  JSObject* buf = JS_GetArrayBufferViewBuffer(cx, view, &shared);
  if (!buf) {
    return Local<ArrayBuffer>();
  }

  JS::Value bufVal;
  bufVal.setObject(*buf);
  return internal::Local<ArrayBuffer>::New(isolate, bufVal);
}

size_t ArrayBufferView::ByteOffset() {
  AAutoJSAPI jsAPI(this);
  JSObject* view = GetObject(this);
  // SMTODO is needed? as in fanal it tries both
  if (JS_IsTypedArrayObject(view)) {
    return JS_GetTypedArrayByteOffset(view);
  }

  return JS_GetArrayBufferViewByteOffset(view);
}

size_t ArrayBufferView::ByteLength() {
  AAutoJSAPI jsAPI(this);
  JSObject* view = GetObject(this);
  JSContext* cx = JSContextFromIsolate(v8::Isolate::GetCurrent());
  // SMTODO is needed?
  if (JS_IsTypedArrayObject(view)) {
    return JS_GetTypedArrayByteLength(view);
  }

  return JS_GetArrayBufferViewByteLength(view);
}

ArrayBufferView* ArrayBufferView::Cast(Value* val) {
  assert(val->IsArrayBufferView());
  return static_cast<ArrayBufferView*>(val);
}
}
