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
  await prisma.department.deleteMany();
  await prisma.division.deleteMany();

  for (let i = 1; i < 5; i++) {
    await prisma.division.create({
      data: {
        divisionName: `division-${i}`,
      },
    });
  }

  const divisionIds = await prisma.division.findMany({ select: { id: true } });

  const codes = ["MB", "MC", "MQ", "MR", "MJ"];

  for (let i = 0; i < codes.length; i++) {
    const divisionId = divisionIds[i > 3 ? i - 4 : i].id;

    console.log("divisionId::", divisionId);

    const level1Department = await prisma.department.create({
      data: {
        departmentName: codes[i],
        divisionId,
      },
    });

    for (let i = 0; i < 10; i++) {
      const level2Department = await prisma.department.create({
        data: {
          departmentName: level1Department.departmentName + "A",
          divisionId: level1Department.divisionId,
        },
      });

      for (let i = 0; i < 30; i++) {
        await prisma.department.create({
          data: {
            departmentName: level2Department.departmentName + "D",
            divisionId: level2Department.divisionId,
          },
        });
      }
    }
  }

  const departments = await prisma.department.findMany();
  const totalDepartments = departments.length;

  console.log("seeding users...");

  for (let i = 0; i < 100; i++) {
    await prisma.user.create({
      data: {
        email: faker.internet.email().toLowerCase(),
        image: faker.internet.avatar(),
        name: faker.name.fullName(),
        departmentId:
          departments[Math.floor(Math.random() * totalDepartments)].id,
      },
    });
  }

  console.log("seeding buildings and seats...");

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
              wingId: wing.id,
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
