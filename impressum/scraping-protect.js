document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("impressum-content");
  if (!container) return;

  const parts = [
    "Angaben gemäß § 5 TMG",
    "Clarissa Bilke",
    "Leipzig, Deutschland",
    "E-Mail: ",
    "clarissa.bilke93",
    "@",
    "gmx",
    ".de",
    "clarafalldevmonster.github.io/Clarissa-Bilke-UX-Design",
    "Verantwortlich für den Inhalt nach <strong>§ 55 Abs. 2 RStV</strong>:",
    "Clarissa Bilke",
    "Haftungsausschluss",
    "Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als private Anbieterin dieser Webseite bin ich gemäß <strong>§ 7 Abs. 1 TMG</strong> für <strong>eigene Inhalte</strong> auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach <strong>§§ 8 bis 10 TMG</strong> bin ich jedoch <strong>nicht</strong> verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
    "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch <strong>erst ab dem Zeitpunkt der Kenntnis</strong> einer konkreten Rechtsverletzung möglich. <strong>Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen</strong>.",
    "Haftung für Links",
    "Diese Webseite enthält Links zu externen Webseiten Dritter (LinkedIn, GitHub), auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der oder die jeweilige Anbieter:in oder Betreiber:in der Seiten verantwortlich. <strong>Bei bekannt werden von Rechtsverletzungen werde ich derartige Links umgehend entfernen</strong>.",
    "Urheberrecht",
    "Die durch mich erstellten Inhalte und Werke auf dieser Webseite unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung oder jegliche Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen <strong>meiner schriftlichen Zustimmung</strong>. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die Urheberrechte Dritter beachtet. Inhalte Dritter sind als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, <strong>bitte ich um einen entsprechenden Hinweis – bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen</strong>.",
    "Hinweis",
    "Diese Website dient ausschließlich der <strong>Präsentation meiner gestalterischen Fähigkeiten</strong> sowie der <strong>Bewerbung für berufliche Tätigkeiten</strong>. Sie ist <strong>nicht</strong> kommerziell und verfolgt keinerlei Gewinnerzielungsabsicht."
  ];

  container.innerHTML = `
    <h1 class="headline2">${parts[0]}</h1>
      ${parts[1]}<br>
      ${parts[2]}<br>
      ${parts[3]}<a href="mailto:${parts[4]}${parts[5]}${parts[6]}${parts[7]}" style="color:#ed61ad">${parts[4]}${parts[5]}${parts[6]}${parts[7]}</a><br>
      Website: <a class="mail" href="https://${parts[8]}" style="color:#ed61ad" target="_blank" rel="noopener noreferrer">${parts[8]}</a><br><br>
      ${parts[9]}<br>
      <p>${parts[10]}</p>
      <h1 class="headline2">${parts[11]}</h1>
      <p>${parts[12]}
      ${parts[13]}</p>
       <h1 class="headline2">${parts[14]}</h1>
      <p>${parts[15]}</p>
       <h1 class="headline2">${parts[16]}</h1>
      <p>${parts[17]}</p>
       <h1 class="headline2">${parts[18]}</h1>
      <p>${parts[19]}</p>
  `;
});
