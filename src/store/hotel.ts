export const useHotelService = () => {
    const config = useRuntimeConfig()

    const getHotels = async () => {
      try {
        const { data, error } = await useFetch(`${config.public.apiBaseUrl}/hotels`)
        if (error.value) throw new Error(error.value.message)
        return data.value || []
      } catch (err) {
        console.error('Erreur lors du chargement des hôtels :', err)
        return []
      }
    }

  const getHotelById = async (id: string) => {
    const config = useRuntimeConfig()
    try {
      const { data, error } = await useFetch(`${config.public.apiBaseUrl}/hotels/${id}`)
      if (error.value) throw new Error(error.value.message)
      return data.value
    } catch (err) {
      console.error(`Erreur lors du chargement de l'hôtel ${id}:`, err)
      return null
    }
  }

  return {
    getHotels,
    getHotelById,
  }
}
