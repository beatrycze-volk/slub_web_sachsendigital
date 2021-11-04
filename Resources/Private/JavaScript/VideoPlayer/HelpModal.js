import SimpleModal from './SimpleModal';

export default class HelpModal extends SimpleModal {
  _createDom() {
    const dom = super._createDom("help-modal");

    dom.title.innerText = "Bedienhinweise";

    dom.body.innerHTML = `
      <h3 class="subheader">Navigation</h3>

      <table class="keybindings-table">
        <tbody>
          <tr>
            <td class="legend">Taste</td>
            <td class="legend">Funktion</td>
          </tr>
          <tr>
            <td>Pfeil rechts</td>
            <td>10 Sekunden weiter</td>
          </tr>
          <tr>
            <td>Pfeil links</td>
            <td>10 Sekunden zurück</tr>
          </tr>
          <tr>
            <td>Strg + rechts</td>
            <td>Kapitel weiter</td>
          </tr>
          <tr>
            <td>Strg + links</td>
            <td>Kapitel zurück</td>
          </tr>
          <tr>
            <td>Umschalt + rechts <em>oder</em> Punkt</td>
            <td>Einzelbild weiter</td>
          </tr>
          <tr>
            <td>Umschalt + links <em>oder</em> Komma</td>
            <td>Einzelbild zurück</td>
          </tr>
        </tbody>
      </table>

      <h3 class="subheader">Weitere Tastenkürzel</h3>

      <table class="keybindings-table">
        <tbody>
          <tr>
            <td class="legend">Taste</td>
            <td class="legend">Funktion</td>
          </tr>
          <tr>
            <td>Leertaste</td>
            <td>Abspielen / Pausieren</td>
          </tr>
          <tr>
            <td>Taste F</td>
            <td>Vollbild an / aus</td>
          </tr>
          <tr>
            <td>Taste M</td>
            <td>Stummschaltung an / aus</td>
          </tr>
          <tr>
            <td>Taste B</td>
            <td>Bookmark (Link teilen)</td>
          </tr>
          <tr>
            <td>Taste S</td>
            <td>Screenshot anzeigen</td>
          </tr>
          <tr>
            <td>F1</td>
            <td>Bedienhinweise (dieses Fenster)</td>
          </tr>
          <tr>
            <td>Escape</td>
            <td>Aktuelle Aktion beenden (Fenster, Vollbild, ...)</td>
          </tr>
        </tbody>
      </table>
    `;

    return dom;
  }
}
