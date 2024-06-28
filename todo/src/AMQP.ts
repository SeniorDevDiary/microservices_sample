import amqp from "amqplib";

const QUEUE = "EXCHANGE_HISTORY";

export const receivedMessages: string[] = [];

export const receiveMessage = async () => {
  try {
    const connection = await amqp.connect(process.env.AMPQ_URL as string);
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE, {
      durable: false,
    });

    channel.consume(
      QUEUE,
      (msg: any) => {
        console.log(` [x] Received 'msg': `, msg);
        console.log(` [x] Received '${msg?.content?.toString()}'`);
        receivedMessages.push(msg?.content?.toString() || "Error");
      },
      {
        noAck: true,
      }
    );
  } catch (error) {
    console.error("Error:", error);
  }
};

(async () => {
  await receiveMessage();
})();
