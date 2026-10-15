import { db } from './index.ts';
import { inquiries, NewInquiry } from './schema.ts';

export async function createInquiry(data: {
  name: string;
  email: string;
  projectScope: string;
  message: string;
}) {
  try {
    const result = await db
      .insert(inquiries)
      .values({
        name: data.name,
        email: data.email,
        projectScope: data.projectScope,
        message: data.message,
        status: 'pending',
      })
      .returning();
    return result[0];
  } catch (error) {
    console.error('Failed to insert inquiry into database:', error);
    throw new Error('Failed to record inquiry. Please try again later.', { cause: error });
  }
}

export async function getInquiries() {
  try {
    return await db.select().from(inquiries);
  } catch (error) {
    console.error('Failed to retrieve inquiries from database:', error);
    throw new Error('Failed to retrieve inquiries.', { cause: error });
  }
}
