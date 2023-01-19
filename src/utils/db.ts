// will probably be a db lookup, therefore async

export const doesPaymentWithIdForUserExist = async (userName: string, paymentId: number) => paymentId < 10

export const getPaymentById = async (id: number) => ({ id, name: `Payment # ${id}` })
