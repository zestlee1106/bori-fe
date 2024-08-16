export async function GET() {
  return Response.json({
    banners: [
      {
        id: 1,
        title: 'temp1',
      },
      {
        id: 2,
        title: 'temp2',
      },
      {
        id: 3,
        title: 'temp3',
      },
      {
        id: 4,
        title: 'temp4',
      },
    ],
  })
}
