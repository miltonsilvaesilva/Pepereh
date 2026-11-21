"""Gera a pré-visualização privada (artifact) a partir do site construído pelo Jekyll.
Uso: python3 gerar-preview.py <pasta _site construída> <pasta de saída>
Depois publicar <saída>/index.html com o Artifact tool (mesmo file_path, para manter o URL),
passando os ficheiros de assets listados no fim como `files` e `root`=<saída>."""
import re, os, shutil, sys
site, P = sys.argv[1], sys.argv[2]
shutil.rmtree(P, ignore_errors=True); os.makedirs(P)
h = open(site + '/index.html').read()
css = open(site + '/styles.css').read()
js = open(site + '/script.js').read()
body = h.split('<body', 1)[1]; body = body[body.index('>') + 1:]; body = body.rsplit('</body>', 1)[0]
m = re.search(r'<script src="/script\.js[^"]*"([^>]*)></script>', body)
attrs = re.sub(r'data-form="[^"]*"', 'data-form=""', m.group(1))
attrs = re.sub(r'data-privacy="[^"]*"', 'data-privacy="https://pepereh.com/privacidade/"', attrs)
body = body.replace(m.group(0), '<script' + attrs + '>\n' + js + '\n</script>')
body = re.sub(r'href="/#', 'href="#', body)
body = re.sub(r'href="/(noticias|privacidade|termos)/', r'target="_blank" rel="noopener" href="https://pepereh.com/\1/', body)
body = body.replace('href="/"', 'href="#top"')
body = re.sub(r'(src|srcset|href)="/assets/', r'\1="assets/', body)
banner = '<div class="pv-banner">Pré-visualização privada · ainda não publicado em pepereh.com · o formulário não envia mensagens nesta versão</div>'
page = f'''<title>PEPEREH Pré-visualização</title>
<style>
{css}
.pv-banner{{background:#0b0b14;color:#fff;font:600 13px/1.4 "Plus Jakarta Sans",system-ui,sans-serif;text-align:center;padding:8px max(16px, env(safe-area-inset-left, 0px));}}
.pv-banner::before{{content:"● ";color:#d63cff}}
</style>
{banner}
{body}'''
open(P + '/index.html', 'w').write(page)
refs = sorted(set(re.findall(r'assets/[A-Za-z0-9_\-./]+\.(?:png|webp|svg|woff2|jpg)', page)))
for r in refs:
    os.makedirs(os.path.dirname(P + '/' + r), exist_ok=True); shutil.copy(site + '/' + r, P + '/' + r)
    if r.endswith('.svg'):
        s = open(P + '/' + r).read()
        s = re.sub(r'<!DOCTYPE[^>]*>\s*', '', s); s = re.sub(r'<\?xml[^>]*\?>\s*', '', s)
        open(P + '/' + r, 'w').write(s)
print('\n'.join(refs))
