const basePath = (str) => {
  let url
  if (process.env.NODE_ENV === 'development') {
    url = `http://localhost:3000${str}`
  } else {
    url = `${process.env.BASE_URL}${str}`
  }
  return url
}

export default basePath
