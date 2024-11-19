export const updateService = async (req: any, res: any) => {
    const { categoryId, serviceId } = req.params;
    const { name, type, prices } = req.body;

    try {
        const service = await prisma?.service.update({
            where: { id: parseInt(serviceId) },
            data: { type },
        });

        const service_id: any = service?.id;
        if (prices && Array.isArray(prices)) {
            await prisma?.servicePrice.deleteMany({ where: { service_id } });

            for (const price of prices) {
                await prisma?.servicePrice.create({
                    data: {
                        service_id: service_id,
                        duration: price.duration,
                        price: price.price,
                        type: price.type,
                    },
                });
            }
        }

        res.status(200).json({ message: 'Service updated successfully', service });
    } catch (error) {
        res.status(400).json({ message: 'Error updating service', error });
    }
};
