import prisma from "../../../../../../../lib/prisma";
import { TColumn } from "../columns";

export async function getCustomers() {
  try {
    const customers = await prisma.user.findMany({
      where: {
        role: "customer",
      },
      include: {
        _count: {
          select: {
            orders: true,
          },
        },
      },
    });

    const response: TColumn[] = customers.map((customers) => {
      return {
        id: customers.id,
        name: customers.name,
        email: customers.email,
        total_transactions: customers._count.orders,
      };
    });

    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}
