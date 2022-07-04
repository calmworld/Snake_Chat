import { useEffect, useRef, useState } from "react";
 import socketIOClient from "socket.io-client";

 const NewMsgEvent = "newMsg";
 const SocketServerURL = "http://localhost:6060";

 export default useChat;