import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos - Abigaël Mapendo Buyana",
  description: "En savoir plus sur la vie d'Abigaël Mapendo Buyana",
};

const AboutPage = () => {
  return (
    <div>
      <section className="mb-16">
        <h1 className="font-serif text-4xl text-center mb-8">À propos d&apos;Abigaël</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/IMG_4079.JPG"
              alt="Abigaël Mapendo Buyana"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Biographie</h2>
            <p className="text-gray-700 mb-4">
              La biographie de notre chère enfant, sœur, fille, et amie{" "}
              <span className="font-semibold">MAPENDO BUYANA Abigaël</span>, communément appelée{" "}
              <span className="font-semibold">ABBY</span>, née le{" "}
              <span className="font-semibold">22 février 2009</span> et décédée le{" "}
              <span className="font-semibold">27 décembre 2024</span>.
            </p>
            <p className="text-gray-700 mb-4">
              Dont le père s&apos;appelle <span className="font-semibold">PAUL BUYANA</span> et maman{" "}
              <span className="font-semibold">SOLANGE KAGENYI</span>.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Famille</h3>
            <p className="text-gray-700 mb-4">Elle a eu 3 sœurs et 3 frères biologiques.</p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Éducation</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <span className="font-medium">2011-2012:</span> Études maternelles au COMPLEXE SCOLAIRE LA JOIE.
              </li>
              <li>
                <span className="font-medium">2013-2019:</span> Certificat d&apos;études primaires au COMPLEXE SCOLAIRE LA
                JOIE.
              </li>
              <li>
                <span className="font-medium">2020-2024:</span> Études secondaires au LYCEE SAINTE URSULE en 5ème année
                industrie agricole.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Passions et talents</h3>
            <p className="text-gray-700 mb-4">
              Abigaël a captivé par sa vivacité et son sourire contagieux. Passionnée par la musique chrétienne et les
              arts, elle exprimait sa créativité à travers le chant, la danse, le dessin, et le style de mode.
            </p>
          </div>
        </div>
      </section>
      <section className="space-y-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Identité</h3>
            <div className="text-gray-700">
              <p className="mb-4">
                La biographie de notre chère enfant, sœur, fille, et amie{" "}
                <span className="font-semibold">MAPENDO BUYANA Abigaël</span>, communément appelée{" "}
                <span className="font-semibold">ABBY</span>, née le{" "}
                <span className="font-semibold">22 février 2009</span> et décédée le{" "}
                <span className="font-semibold">27 décembre 2024</span>.
              </p>
              <p className="mb-4">
                Dont le père s&apos;appelle <span className="font-semibold">PAUL BUYANA</span> et maman{" "}
                <span className="font-semibold">SOLANGE KAGENYI</span>.
              </p>
              <p className="mb-4">Elle a eu 3 sœurs et 3 frères biologiques.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Parcours Scolaire</h3>
            <div className="text-gray-700">
              <p className="mb-4">
                Elle a commencé ses études maternelles au COMPLEXE SCOLAIRE LA JOIE de 2011 à 2012,
                et de 2013 à 2019 où elle a obtenu son certificat d&apos;études primaires toujours au COMPLEXE SCOLAIRE LA JOIE.
              </p>
              <p className="mb-4">
                En 2020, elle a commencé ses études secondaires au LYCEE SAINTE URSULE et malheureusement en 5ème année industrie agricole, elle nous a quittés.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Personnalité</h3>
            <div className="text-gray-700">
              <p className="mb-4">
                Abigaël est née le 22 février 2009, dans cette ville de Goma où elle a rapidement captivé l&apos;attention des gens par sa vivacité et son sourire contagieux. Passionnée par la musique chrétienne et les arts dès son jeune âge, Abigaël a su exprimer sa créativité à travers diverses disciplines, notamment le chant, la danse, le dessin, et le style de mode.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Formations</h3>
            <div className="text-gray-700">
              <p className="mb-4">
                Elle faisait de l&apos;anglais à chaque vacance au BTC (Brotherly Training Center).
              </p>
              <p className="mb-4">
                Elle a fait la conduite automobile en 2022 toujours à l&apos;école de langue BTC.
              </p>
              <p className="mb-4">
                Elle a aussi créé son entreprise où elle était CEO, nommée Zoe entreprise.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Vie spirituelle</h3>
            <div className="text-gray-700">
              <p className="mb-4">
                Elle a fait l&apos;éco-dime à CECA 20 Shabaaa.
              </p>
              <p className="mb-4">
                À 6 ans, elle a commencé la danse Gospel avec le groupe chrétien Effective Joy (EJO en sigle) et jusqu&apos;à nos jours voir dans les cieux.
              </p>
              <p className="mb-4">
                En mars 2020, elle a reçu Christ comme son seigneur et sauveur et s&apos;est décidée alors en fin 2024 de commencer à suivre la classe de baptême à Arche de l&apos;alliance Goma pour enfin témoigner son SALUT.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rêves et ambitions</h3>
            <div className="text-gray-700">
              <p className="mb-4">
                Elle voulait vraiment continuer avec son entreprise ZOE en produisant plusieurs produits et en répondant aux besoins et problèmes de la population congolaise, elle était sa source de motivation.
              </p>
              <p className="mb-4">
                Elle rêvait aussi, comme ses frères et sœurs, d&apos;étudier dans un pays anglophone pour faire l&apos;agroalimentaire et la chimie industrielle afin de promouvoir l&apos;agriculture dans notre pays.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Vie sociale</h3>
            <div className="text-gray-700">
              <p className="mb-4">
                Au cours de sa vie, Abigaël a réussi à toucher les cœurs de nombreuses personnes par son engagement communautaire et son altruisme. Elle s&apos;est souvent impliquée dans des activités destinées à aider les enfants défavorisés, montrant ainsi un sens aigu de la compassion et du service en travaillant pour le Christ. Son amour pour les enfants qu&apos;elle rencontrait, inconnus soient-ils, était doté d&apos;un don de soumission, d&apos;un esprit de partage, d&apos;amour du prochain, de pardon, de bienveillance, et de satisfaction.
              </p>
              <p className="mb-4">
                Malheureusement, la vie d&apos;Abigaël a été tragiquement écourtée lorsqu&apos;elle est décédée le 27 décembre 2024, à l&apos;âge de 15 ans. Son décès a laissé un vide immense dans la vie de sa famille, de ses amis et de sa communauté. Sa mémoire perdure à travers les nombreux impacts qu&apos;elle a laissés et les souvenirs joyeux qu&apos;elle a créés.
              </p>
              <p className="mb-4">
                Abigaël est célébrée non seulement pour ses talents artistiques mais aussi pour la lumière qu&apos;elle a apportée à ceux qui l&apos;entouraient. Son héritage continue d&apos;inspirer et de rappeler l&apos;importance de vivre pleinement en Christ et d&apos;apporter de la joie aux autres.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Final</h3>
            <div className="text-gray-700">
              <p className="mb-4">
                Hélas! Dieu a aimé ses œuvres plus que nous, et nous espérons qu&apos;à ce moment elle danse avec les anges au cieux auprès du père comme elle le faisait avec nous quand elle était encore vivante!
              </p>
              <p className="mb-4">
                Repose en paix, notre chère Abigaël Buyana!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-3xl text-center mb-8">Moments Précieux</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/471780943_1075563971250575_7018799193028159953_n.jpg",
            "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/tontonbob%20%20IMG_2126.jpg",
            "https://vmzndvyzclcpgzozziex.supabase.co/storage/v1/object/public/abiga/696357e7-0ffd-4038-8870-19a07ab56db6.jpg",
          ].map((image, i) => (
            <div
              key={i}
              className="relative w-full pb-[75%] rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={image}
                alt={`Souvenir ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/photos"
            className="inline-block px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Voir plus de photos
          </Link>
        </div>
      </section>

      <section className="text-center max-w-2xl mx-auto">
        <blockquote className="font-serif text-2xl text-gray-600 italic leading-relaxed mb-6">
          &ldquo;Elle restera à jamais dans nos cœurs comme un exemple de joie, d&apos;amour et de courage.&rdquo;
        </blockquote>
        <div className="w-16 h-1 bg-gray-200 mx-auto"></div>
      </section>
    </div>
  );
};

export default AboutPage;
