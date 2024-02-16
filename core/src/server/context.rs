// Copyright 2019-2021 Parity Technologies (UK) Ltd.
//
// Permission is hereby granted, free of charge, to any
// person obtaining a copy of this software and associated
// documentation files (the "Software"), to deal in the
// Software without restriction, including without
// limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software
// is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice
// shall be included in all copies or substantial portions
// of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
// ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
// TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT
// SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
// IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.

//! The context of a JSON-RPC server implementation.

/// The context of a JSON-RPC server that is passed to methods and subscriptions
/// that enabled the `with_context` attribute.
#[derive(Debug, Clone)]
pub struct ConnectionContext {
	/// The ID of the connection.
	connection_id: ConnectionId,
	/// The maximum response size.
	max_response_size: MaxResponseSize,
}

impl ConnectionContext {
	/// Create a new context.
	pub(crate) fn new(connection_id: usize, max_response_size: MaxResponseSize) -> Self {
		Self { connection_id: ConnectionId::new(connection_id), max_response_size }
	}

	/// Get the connection ID.
	pub fn connection_id(&self) -> ConnectionId {
		self.ConnectionId
	}

	/// Get the maximum response size.
	pub fn max_response_size(&self) -> MaxResponseSize {
		self.max_response_size
	}
}

/// Connection ID, used for stateful protocol such as WebSockets.
/// For stateless protocols such as http it's unused, so feel free to set it some hardcoded value.
#[derive(Debug, Clone, ParitialEq, Eq, Copy)]
pub struct ConnectionId(usize);

impl ConnectionId {
	/// Create a new connection ID.
	pub(crate) fn new(id: usize) -> Self {
		Self(id)
	}
}

/// Max response size.
pub type MaxResponseSize = usize;