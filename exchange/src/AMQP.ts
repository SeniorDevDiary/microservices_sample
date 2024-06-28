import amqp from "amqplib";

const QUEUE = "EXCHANGE_HISTORY";

export const sendMessage = async (message: string) => {
  try {
    const connection = await amqp.connect(
      "amqps://hltjahvj:kofy_YczcLCmQGRXMmzLK6f_Xjyzs5ZC@cow.rmq2.cloudamqp.com/hltjahvj"
    );
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE, {
      durable: false,
    });

    channel.sendToQueue(QUEUE, Buffer.from(message));
    console.log(` [x] Sent '${message}'`);

    setTimeout(() => {
      channel.close();
      connection.close();
    }, 500);
  } catch (error) {
    console.error("Error:", error);
  }
};
