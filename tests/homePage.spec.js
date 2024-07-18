import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { MailSlurp } from "mailslurp-client";

test("Test Home Page", async ({ page }, testInfo) => {
  let randomUserName = faker.internet.userName();
  let randomAdrr = faker.location.streetAddress();
  const mailSlurp = new MailSlurp({ apiKey: process.env.API_KEY_MAILSLURP });
  await page.goto("http://localhost:3000");

  await test.step("Type User Name And Click Button", async () => {
    const usernameParagraph = page.locator("p.username");
    await page.fill('input[name="username"]', randomUserName);
    await page.getByText("CLICK TO CHANGE USER NAME").click();
    await expect(usernameParagraph).toHaveText(randomUserName);
    await testInfo.attach("screenshot", {
      body: await page.screenshot(),
      contentType: "image/png",
    });
  });

  // await test.step("Send Email With mailslurp", async () => {
  //   const inbox = await mailSlurp.createInbox();
  //   await mailSlurp.sendEmail(inbox.id, {
  //     to: ["mndx1t@gmail.com"],
  //     subject: "Mail Testing",
  //     body: `Random User: ${randomUserName} randomAdrr: ${randomAdrr}`,
  //   });
  // });
});
