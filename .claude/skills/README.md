# Skills do projecto PEPEREH

| Skill | Origem | Para que serve |
|---|---|---|
| noticias-pepereh | PEPEREH (própria) | Notícias semanais do site, com aprovação |
| frontend-design | anthropics/skills | Design de interfaces e páginas web com identidade própria |
| webapp-testing | anthropics/skills | Testar aplicações web locais com Playwright (capturas, cliques, registos da consola) |
| skill-creator | anthropics/skills | Criar, melhorar e avaliar skills |
| pdf | anthropics/skills | Ler, criar, juntar, dividir e preencher PDF |
| docx | anthropics/skills | Criar e editar documentos Word (.docx) |
| xlsx | anthropics/skills | Criar e editar folhas de cálculo Excel (.xlsx) |
| pptx | anthropics/skills | Criar e editar apresentações PowerPoint (.pptx) |

## Origem das skills da Anthropic
- Repositório: https://github.com/anthropics/skills
- Versão instalada (commit): `e4bb5d960d87126ff3b3a8af1a104b7db67560ba`
- Instaladas em 26/11/2026, sem alterações aos ficheiros originais.
- Licença: Apache 2.0 (ver `LICENSE.txt` em cada pasta) · avisos de terceiros em `THIRD_PARTY_NOTICES.md`.

## Revisão de segurança (26/11/2026)
- Sem binários, ligações simbólicas ou ficheiros ocultos; só texto (Markdown, Python, JavaScript, HTML, esquemas XSD/XML).
- Sem código ofuscado, sem envio de dados para servidores externos e sem leitura de chaves ou segredos.
- Execução de comandos apenas para o fim declarado: servidor local de testes (webapp-testing), LibreOffice para converter documentos (docx/xlsx/pptx), e chamadas ao Claude para avaliar skills (skill-creator).
- `office/soffice.py` compila um pequeno adaptador em C que só substitui um tipo de socket bloqueado em ambientes isolados; não acede à rede. Também retira ligações externas dos documentos antes de os abrir.
- Validação oficial (`skill-creator/scripts/quick_validate.py`): as 7 skills são válidas.

## Para actualizar
Voltar a copiar as pastas do repositório oficial e repetir a revisão de segurança antes de guardar.
