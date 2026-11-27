import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.5:0',
  releaseNotes: {
    en_US:
      'BraiinsOS miners (e.g. Antminer S9) now work out of the box: the app detects firmware that hides stats behind a login, asks once for the root password, and stores it encrypted on the server. Miners without power control now show the slider display-only. The password prompt no longer reopens endlessly — a state-persistence bug is fixed — and logs are quiet. Full notes: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.5',
    es_ES:
      'Los mineros BraiinsOS (p. ej. Antminer S9) funcionan de inmediato: la app detecta el firmware que oculta las estadísticas tras un acceso, pide una vez la contraseña de root y la guarda cifrada en el servidor. Los mineros sin control de potencia muestran ahora el control deslizante en modo solo lectura. El aviso de contraseña ya no se repite sin fin — se corrigió un error de persistencia de estado — y los registros son silenciosos. Notas completas: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.5',
    de_DE:
      'BraiinsOS-Miner (z. B. Antminer S9) funktionieren jetzt ab Werk: Die App erkennt Firmware, die Statistiken hinter einem Login versteckt, fragt einmal das Root-Passwort ab und speichert es verschlüsselt auf dem Server. Miner ohne Power-Steuerung zeigen den Regler jetzt als Anzeigeelement. Der Passwort-Dialog erscheint nicht mehr endlos — ein State-Persistenz-Bug wurde behoben — und die Logs sind ruhig. Vollständige Hinweise: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.5',
    pl_PL:
      'Minery BraiinsOS (np. Antminer S9) działają teraz od razu: aplikacja wykrywa oprogramowanie ukrywające statystyki za logowaniem, pyta raz o hasło root i zapisuje je zaszyfrowane na serwerze. Minery bez kontroli mocy pokazują suwak tylko do podglądu. Okno hasła nie wyskakuje już w kółko — naprawiono błąd trwałości stanu — a logi są ciche. Pełne informacje: https://github.com/heatpunk/blisspoint/releases/tag/v0.6.5',
    fr_FR:
      'Les mineurs BraiinsOS (ex. Antminer S9) fonctionnent désormais immédiatement : l’app détecte le firmware qui masque les statistiques derrière un identifiant, demande une fois le mot de passe root et le stocke chiffré sur le serveur. Les mineurs sans contrôle de puissance affichent le curseur en lecture seule. La boîte de mot de passe ne se rouvre plus en boucle — un bug de persistance d’état est corrigé — et les journaux sont silencieux. Notes complètes : https://github.com/heatpunk/blisspoint/releases/tag/v0.6.5',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
