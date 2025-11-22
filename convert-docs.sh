#!/bin/bash

# Converte a página principal
pandoc markdown/README.md \
  --template=docs/template.html \
  --variable=title:"Documentação" \
  --variable=root_path:"" \
  --variable=section:"Introdução" \
  --variable=component:"" \
  --variable=source_path:"README.md" \
  -o docs/index.html

# Converte cada arquivo .md
find markdown -type f -name "*.md" | while read file; do

  # Ignora o README principal
  if [[ "$file" == "markdown/README.md" ]]; then
    continue
  fi

  rel_path="${file#markdown/}"
  filename="$(basename "$rel_path" .md)"
  target_dir="docs/$(dirname "$rel_path")"
  mkdir -p "$target_dir"

  echo "Convertendo $file para $target_dir/$filename.html"

  # Detecta título da primeira linha
  page_title="$(head -n 1 "$file" | sed 's/^# //')"

  # Calcula root_path automaticamente
  level_count=$(echo "$rel_path" | grep -o "/" | wc -l)
  root_path=""
  for ((i=1; i<=level_count; i++)); do
    root_path="../$root_path"
  done

  # 🔥 DETECTA HIERARQUIA
  if [[ "$rel_path" == components/* ]]; then
    section="Componentes"
    component="true"
  else
    section="$page_title"
    component=""
  fi

  pandoc "$file" \
    --from=markdown+fenced_divs+backtick_code_blocks \
    --template=docs/template.html \
    --variable=title:"$page_title" \
    --variable=root_path:"$root_path" \
    --variable=section:"$section" \
    --variable=component:"$component" \
    --variable=source_path:"$rel_path" \
    -o "$target_dir/$filename.html"

done

echo "Conversão concluída!"
