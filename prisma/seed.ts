import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("seeding test data...");

  await prisma.$connect();

  await prisma.user.deleteMany();
  await prisma.building.deleteMany();
  await prisma.floor.deleteMany();
  await prisma.wing.deleteMany();
  await prisma.seat.deleteMany();

  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email().toLowerCase(),
        image: faker.internet.avatar(),
        name: faker.name.fullName(),
      },
    });
  }

  for (let i = 1; i < 2; i++) {
    const building = await prisma.building.create({
      data: {
        buildingName: `building-${i}`,
      },
    });

    for (let i = 1; i < 5; i++) {
      const floor = await prisma.floor.create({
        data: {
          buildingId: building.id,
          floorNo: i,
        },
      });

      for (let i = 1; i < 4; i++) {
        const wingName = i === 1 ? "A" : i === 2 ? "B" : i === 3 ? "C" : "D";

        const wing = await prisma.wing.create({
          data: {
            floorId: floor.id,
            wingName: `L${floor.floorNo}-${wingName}`,
          },
        });

        // 54 seats per wing
        for (let i = 1; i < 55; i++) {
          await prisma.seat.create({
            data: {
              seatNumber: `${wing.wingName}-${i.toString().padStart(3, "0")}`,
            },
          });
        }
      }
    }
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
