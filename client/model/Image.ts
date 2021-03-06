type Image = {
  fields: {
    title: string,
    file: {
      url: string,
      contentType: string,
      fileName: string,
      details: {
        size: number
        image: {
          height: number,
          width: number,   
        }
      }
    },
  },
  sys: any,
}

export default Image;