# Skills do projecto PEPEREH

Esta pasta guarda apenas as skills próprias da PEPEREH.

| Skill | Origem | Para que serve |
|---|---|---|
| noticias-pepereh | PEPEREH (própria) | Notícias semanais do site, com aprovação |

## Skills oficiais da Anthropic usadas no projecto
Estas skills já não são guardadas no repositório. Chegam a cada sessão por um de dois caminhos:

| Skill | Disponível através de | Para que serve |
|---|---|---|
| frontend-design | PEPEREH AI Environment (`~/.claude/skills`) | Design de interfaces e páginas web com identidade própria |
| webapp-testing | PEPEREH AI Environment (`~/.claude/skills`) | Testar aplicações web locais com Playwright (capturas, cliques, registos da consola) |
| docx | Conta Anthropic (`anthropic-skills:docx`) | Criar e editar documentos Word (.docx) |
| pdf | Conta Anthropic (`anthropic-skills:pdf`) | Ler, criar, juntar, dividir e preencher PDF |
| pptx | Conta Anthropic (`anthropic-skills:pptx`) | Criar e editar apresentações PowerPoint (.pptx) |
| xlsx | Conta Anthropic (`anthropic-skills:xlsx`) | Criar e editar folhas de cálculo Excel (.xlsx) |
| skill-creator | Conta Anthropic (`anthropic-skills:skill-creator`) | Criar, melhorar e avaliar skills |

- O PEPEREH AI Environment instala frontend-design e webapp-testing a partir de `anthropics/skills@e4bb5d9`, com SHA-256 verificado. Para confirmar numa sessão, execute `pepereh-skills-check`.
- As skills docx, pdf, pptx, xlsx e skill-creator são sincronizadas pela conta Anthropic e actualizadas por ela.
- `THIRD_PARTY_NOTICES.md` é o aviso de terceiros que acompanhava as cópias da Anthropic (Apache 2.0).

## Histórico
- 26/11/2026: instaladas 7 skills oficiais da Anthropic (commit `e4bb5d9`) após revisão de segurança.
- 26/11/2026: removidas as 7 cópias, que duplicavam as do ambiente e da conta. Todas eram idênticas ao original `e4bb5d9`: não havia personalizações nem dependências do projecto.
