import * as lark from "@larksuiteoapi/node-sdk";

const client = new lark.Client({
  appId: process.env.LARK_APP_ID ?? "",
  appSecret: process.env.LARK_APP_SECRET ?? "",
});
const chatId = process.env.LARK_CHAT_ID ?? "";

/**
 * 发送普通文本消息，文档地址：
 * https://open.feishu.cn/document/server-docs/im-v1/message-content-description/create_json#c9e08671
 */
export async function sendTextMessage(message: string) {
  return client.im.v1.message.create({
    params: {
      receive_id_type: "chat_id",
    },
    data: {
      receive_id: chatId,
      msg_type: "text",
      content: JSON.stringify({ text: message }),
    },
  });
}

/**
 * 发送富文本消息，文档地址：
 * https://open.feishu.cn/document/server-docs/im-v1/message-content-description/create_json#45e0953e
 */
export async function sendPostMessage(content: string) {
  return await client.im.v1.message.create({
    params: { receive_id_type: "chat_id" },
    data: {
      receive_id: chatId,
      msg_type: "post",
      content,
    },
  });
}

/**
 * 发送卡片消息，文档地址：
 * https://open.feishu.cn/document/server-docs/im-v1/message-content-description/create_json#3ea4c2d5
 */
export async function sendCardMessage(content: string) {
  return await client.im.v1.message.create({
    params: { receive_id_type: "chat_id" },
    data: {
      receive_id: chatId,
      msg_type: "interactive",
      content,
    },
  });
}
