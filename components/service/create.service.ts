export const createService = async (req: any, res: any) => {
  const { id } = req.params; 
  const { name, type, prices } = req.body;
console.log("-------------", req.body);

  try {
    const category = await prisma?.category.findUnique({ where: { id: parseInt(id) } });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const service = await prisma?.service.create({
      data: {
        category_id: parseInt(id),
        name,
        type,
      },
    });

    const service_id: any = service?.id;
    if (prices && Array.isArray(prices)) {
      const pricePromises = prices.map((price: any) =>
        prisma?.servicePrice.create({
          data: {
            service_id,
            duration: price.duration || null,
            price: price.price,
            type: price.type || null,
          },
        })
      );
      await Promise.all(pricePromises);
    }

    res.status(201).json({ message: 'Service added successfully', service });
  } catch (error) {
    console.log('Error adding service:', error);
    res.status(400).json({ message: 'Error adding service', error });
  }
};