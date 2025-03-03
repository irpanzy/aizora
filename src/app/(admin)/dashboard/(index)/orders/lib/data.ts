import { getImageUrl } from "@/lib/supabase";
import prisma from "../../../../../../../lib/prisma";
import { TColumn } from "../columns";

export async function getOrders() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
        products: {
          include: {
            product: true,
          },
        },
      },
    });

    const response: TColumn[] = orders.map((orders) => {
      return {
        id: orders.id,
        // name: orders.products?.map((item) => item.product.name).join(", "),
        product: orders.products?.map((item) => {
          return {
            name: item.product.name,
            image: getImageUrl(item.product.images[0]),
          };
        }),
        customer_name: orders.user.name,
        price: Number(orders.total),
        status: orders.status,
      };
    });

    return response;
  } catch (error) {
    console.log(error);

    return [];
  }
}
