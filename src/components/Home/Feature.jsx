import {
  ScissorsIcon,
  SparklesIcon,
  BuildingStorefrontIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import "/src/theme/index.css";

const features = [
  {
    name: "Cortes Precisos",
    description:
      "Desde cortes clásicos hasta estilos modernos, ofrecemos una amplia gama de servicios de corte para satisfacer tus preferencias.",
    icon: ScissorsIcon,
  },
  {
    name: "Experiencia de Barbería",
    description:
      "Vive la auténtica experiencia de barbería con nuestros servicios especializados, desde afeitados clásicos hasta tratamientos faciales relajantes.",
    icon: SparklesIcon,
  },
  {
    name: "Ambiente relajado",
    description:
      "Olvídate del estrés cotidiano. Nuestra barberia es un refugio de relajación donde puedes disfrutar de tu tiempo y salir sintiéndote renovado.",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Ahorra tiempo",
    description:
      "No pierdas más tiempo y reserva tu cita para una experiencia de corte de cabello que va más allá de lo ordinario. Estamos aquí para realizar tu estilo y destacar tu verdadera esencia.",
    icon: ClockIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-auto text-center">
          <h2 className="text-sm font-semibold leading-7 text-[--colorText] ">
            💈 Reserva tu Transformación Ahora 💈
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sin filas y menos tiempo de espera <br /> ¡Todo a un solo click!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            No creemos en un enfoque único para todos. Cada cliente es único, y
            tus gustos y personalidad son la inspiración para crear un estilo
            que sea exclusivamente tuyo.
            <br />
            <strong className="font-bold">
              ¿Tienes una idea en mente? Hablemos y hagámoslo realidad
            </strong>
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-auto">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[--bgButtonLight]">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
