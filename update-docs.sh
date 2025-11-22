#!/bin/bash

echo "Atualizando a documentação do AuraAprendizado Design Kit..."

# Executar o script de conversão
./convert-docs.sh

# Se estiver usando XAMPP, copiar os arquivos para o diretório htdocs
# Descomente as linhas abaixo e ajuste o caminho se necessário
# XAMPP_PATH="/c/xampp/htdocs/frameworks/AuraAprendizado/docs"
# mkdir -p "$XAMPP_PATH"
# cp -r documentation-html/* "$XAMPP_PATH"

echo "Documentação atualizada com sucesso!"
echo "Acesse a documentação em: http://localhost/frameworks/AuraAprendizado/documentation-html/"
