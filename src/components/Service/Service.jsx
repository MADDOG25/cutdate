import "/src/theme/index.css";

export default function Service() {
  return (
    <div className="bg-[--tussockWhite] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Servicios
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Ofrecemos servicios de barbería a domicilio y local desde casa. Olvídate de las esperas y disfruta de la conveniencia con citas fáciles de reservar. ¡Descubre la excelencia en el cuidado personal con nosotros!
          </p>
        </div>
        
        <div className="mx-auto mt-10 grid max-w-xs grid-cols-1 gap-x-8 gap-y-16 border-t border-[--tussock] pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-auto flex-col items-center justify-center">
            <div className="mt-4 flex items-center gap-x-4">
              <img
                src="/1.png"
                alt="imagen"
                className="h-full w-full rounded-md bg-gray-50"
              />
            </div>
          </article>
          <article className="flex max-w-auto flex-col items-center justify-center">
            <div className="mt-4 flex items-center gap-x-4">
              <img
                src="/2.png"
                alt="imagen"
                className="h-25 w-25 object-cover rounded-md bg-gray-50"
              />
            </div>
          </article>
          <article className="flex max-w-auto flex-col items-center justify-center">
            <div className="mt-4 flex items-center gap-x-4">
              <img
                src="/3.png"
                alt="imagen"
                className="h-25 w-25 object-cover rounded-md bg-gray-50"
              />
            </div>
          </article>
          <article className="flex max-w-auto flex-col items-center justify-center">
            <div className="mt-4 flex items-center gap-x-4">
              <img
                src="/4.png"
                alt="imagen"
                className="h-25 w-25 object-cover rounded-md bg-gray-50"
              />
            </div>
          </article>
          <article className="flex max-w-auto flex-col items-center justify-center">
            <div className="mt-4 flex items-center gap-x-4">
              <img
                src="/5.png"
                alt="imagen"
                className="h-25 w-25 object-cover rounded-md bg-gray-50"
              />
            </div>
          </article>
          <article className="flex max-w-auto flex-col items-center justify-center">
            <div className="mt-4 flex items-center gap-x-4">
              <img
                src="/6.png"
                alt="imagen"
                className="h-25 w-25 object-cover rounded-md bg-gray-50"
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
