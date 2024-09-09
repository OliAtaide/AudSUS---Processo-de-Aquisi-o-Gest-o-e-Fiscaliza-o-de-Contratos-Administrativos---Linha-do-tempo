const eventos = [
  {
    ano: 1862,
    texto:
      "O Decreto 2.296/1862 início da abordagem de licitações no Brasil/Ministério da Agricultura, Comércio e Obras Públicas.",
    link: "https://www2.camara.leg.br/legin/fed/decret/1824-1899/decreto-2926-14-maio-1862-555553-publicacaooriginal-74857-pe.html",
  },
  {
    ano: 1967,
    texto:
      'Decreto-Lei 200/1967 Reforma administrativa federal, mencionando pela primeira vez os "Princípios da Licitação". Nele, foram instruídos a concorrência, a tomada de preços e o convite como procedimentos prévios à contratação de serviços e à compra de bens e produtos.',
    link: "https://www.planalto.gov.br/ccivil_03/decreto-lei/del0200.htm",
  },
  {
    ano: 1993,
    texto:
      "A Lei 8.666/93 Sua relevância reside na criação de um ambiente regulatório para promover a honestidade e a competição no setor público.",
  },
  {
    ano: 2002,
    texto:
      "A Lei 10.520 introduziu o pregão como uma modalidade de licitação mais ágil e dinâmica, voltada para a aquisição de bens e serviços comuns.",
  },
  {
    ano: 2011,
    texto:
      "A Lei 12.462 estabeleceu o Regime Diferenciado de Contratações (RDC) para atender a demandas de grandes eventos esportivos.",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/L12462.htm",
  },
  {
    ano: 2016,
    texto:
      'Entrou em vigor a Lei 13.303, denominada de "Lei da Responsabilidade das Estatais" ou simplesmente de "Lei das Estatais", e veio disciplinar a exploração direta de atividade econômica pelo Estado por intermédio de suas empresas públicas e sociedades de economia mista.',
    link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13303.htm",
  },
  {
    ano: 2021,
    texto:
      "Lei 14.133/21 ou a Nova Lei de Licitações e Contratos Administrativos – NLLCA, resultado de um processo contínuo de aprimoramento e alinhamento das práticas governamentais com as demandas atuais, modernizou e atualizou os processos administrativos, incorporando princípios como sustentabilidade e inovação, promove inovações como gestão por competências e governança pública.",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm",
  },
];

eventos.forEach((e) => {
  $(".swiper-wrapper").append(
    `
    <div class="swiper-slide">
        <div class="event">
            <div class="event-body">
                <div class="event-title">
                    ${e.ano}
                </div>
                <div class="event-text">
                    ${e.texto}
                </div>
            </div>
            <div class="h-100 position-relative">
            ${
              e.link
                ? `<a href="${e.link}" type="button" class="event-button" target="_blank">
                <i class="bi bi-eye-fill"></i>
            </a>`
                : ""
            }
            </div>
        </div>
    </div>
    `
  );
});
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return (
        '<div class="d-flex flex-column"><div class="' +
        className +
        '" data-index="' +
        index +
        '"></div><div class="label">' +
        eventos[index].ano +
        "</div></div>"
      );
    },
  },
});

$(".swiper-pagination-bullet").click(function () {
  let i = $(this).data("index");
  swiper.slideTo(i);
});
