// will probably be a db lookup, therefore async

export const getPaymentById = async (id: number, userName: string | null) => {
  if (id >= 10 || userName === null) {
    return null
  } else {
    return { id, name: `Payment # ${id}` }
  }
}
