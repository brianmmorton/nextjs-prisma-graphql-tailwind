import { prisma } from '../../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { given_name, family_name, email, picture, secret } = req.body;

  if (req.method !== 'POST') {
    return res.status(403).json({ message: 'Method not allowed' });
  }

  if (secret !== process.env.AUTH0_HOOK_SECRET) {
    return res.status(403).json({ message: `You must provide the secret 🤫` });
  }

  const existing = await prisma.user.findFirst({
    where: { email },
  });

  if (existing) {
    return res.status(200).json({
      message: `User logged in`,
    });
  }

  if (email) {
    await prisma.user.create({
      data: { firstName: given_name, lastName: family_name, email, avatarUrl: picture },
    });
    return res.status(200).json({
      message: `User with email: ${email} has been created successfully!`,
    });
  }
};

export default handler;
