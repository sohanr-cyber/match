import nextConnect from "next-connect";
import User from "@/database/model/User";
import faker from "faker";
import db from "@/database/connection";
import {
  institutes,
  districts,
  cities,
  names,
  professions,
  marriageStatus,
  averageMonthlyIncomes,
  datesOfBirth,
  upazillas,
  skinColors,
  bodyTypes,
  sessions,
  educationTypes,
  meritalStatuses,
} from "./data";

const handler = nextConnect();

handler.post(async (req, res) => {
  try {
    await db.connect();

    for (let i = 0; i < 5; i++) {
      const dummyUser = {
        name: faker.random.arrayElement(names),
        email: faker.internet.email(),
        password: faker.internet.password(),
        city: faker.random.arrayElement(cities),
        district: faker.random.arrayElement(districts),
        upazilla: faker.random.arrayElement(upazillas),
        educationType: faker.random.arrayElement(educationTypes),
        institute: faker.random.arrayElement(institutes),
        bodyType: faker.random.arrayElement(bodyTypes),
        skinColor: faker.random.arrayElement(skinColors),
        gender: faker.random.arrayElement(["Male", "Female"]),
        status: faker.random.arrayElement(marriageStatus),
        profession: faker.random.arrayElement(professions),
        bornAt: new Date(faker.random.arrayElement(datesOfBirth)),
        session: faker.random.arrayElement(sessions),
        maritalStatus: faker.random.arrayElement(meritalStatuses),
        approved: true,
        impression: faker.random.number({ min: 0, max: 5000 }),
        averageMonthlyIncome: faker.random.number({ min: 20000, max: 80000 }),
      };

      console.log({ dummyUser });
      const newUser = await new User(dummyUser);
      await newUser.save();
    }

    const users = await User.find({});
    res.status(200).send({ users });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
});

handler.get(async (req, res) => {
  try {
    const users = await User.find({}).lean();
    res.status(200).json(users);
  } catch (error) {
    res.status(400);
  }
});
export default handler;
