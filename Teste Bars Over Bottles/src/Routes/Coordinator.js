export const goToHome = (navigate) => {
        navigate('/')
}

export const goToCategory = (navigate, id) => {
    navigate(`/categoria/${id}`)
}

export const goToProduct = (navigate, id) => {
    navigate(`/produto/${id}`)
}