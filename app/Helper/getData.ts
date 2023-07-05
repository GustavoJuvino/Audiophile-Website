export default async function getData(data: string,) {
    const res = await import(`@/app/Api/${data}/route`);
    return await (await res.GET()).json();
  }
