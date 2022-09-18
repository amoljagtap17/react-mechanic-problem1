import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("seeding test data...");

  await prisma.$connect();

  await prisma.user.deleteMany();

  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email(),
        image: faker.internet.avatar(),
        name: faker.name.fullName(),
      },
    });
  }
}

main()
  .then(async () => {
    console.log("seeding test completed...");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
