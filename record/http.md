## http1.1 pipelining 单个tcp链接内发多个请求
请求和响应顺序必须完全相同。而且请求和响应都还是单向串行的
弊端： 队头阻塞。前一个请求没有返回，即使后一个请求已经ready也需要等待前一个请求；很有可能并没有多tcp链接返回快（即使多tcp链接效率低）

## http各阶段的工作模式
单工： 数据传输只允许在一个方向上的传输，只能一方来发送数据，另一方来接收数据并发送。例如：对讲机
半双工：数据传输允许两个方向上的传输，但是同一时间内，只可以有一方发送或接受消息。例如：打电话
全双工：同时可进行双向传输。例如：websocket

http1.0：单工。因为是短连接，客户端发起请求之后，服务端处理完请求并收到客户端的响应后即断开连接。（每次请求或返回，都需要建立一次链接）
http1.1：半双工。默认开启长连接keep-alive，开启一个连接可发送多个请求。
http2.0：全双工，允许服务端主动向客户端发送数据。