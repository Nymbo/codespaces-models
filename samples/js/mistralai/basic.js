import MistralClient from '@mistralai/mistralai';

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.inference.ai.azure.com";

/* Pick one of the Mistral models from the GitHub Models service */
const modelName = "Mistral-small";

export async function main() {

  const client = new MistralClient(token, endpoint);

  const response = await client.chat({
    model: modelName,
    messages: [
      { role:"system", content: "You are a helpful assistant." },
      { role:"user", content: "What is the capital of France?" }
    ],
    // Optional parameters
    temperature: 1.,
    max_tokens: 1000,
    top_p: 1.
  });

  console.log(response.choices[0].message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
