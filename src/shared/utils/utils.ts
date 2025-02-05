export function fakeFetcher<DataType>(data: DataType): Promise<{ data: DataType; error: boolean }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        error: false, //for typing purpose to showcase error handling in delete/edit/create operations
      })
    }, 2000)
  })
}
