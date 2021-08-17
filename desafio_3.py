a= 45 
b = 33
c = 34
ab = 20
ac = 18
bc = 10
maxx = 100
yoshis_choco = yoshis_choco_t - tres_locais
yoshis_cookie = yoshis_cookie_t - tres_locais
choco_cookie = choco_cookie_t - tres_locais
yoshis = yoshis_t -yoshis_choco -yoshis_cookie - tres_locais
choco = choco_t -yoshis_choco -choco_cookie - tres_locais
cookie = cookie_t -choco_cookie -yoshis_cookie - tres_locais
um_lugar = yoshis + choco + cookie + yoshis_choco
nennhum_lugar = maxx - (um_lugar + tres_locais + yoshis_choco + yoshis_cookie + choco_cookie) 
print(um_lugar,'gostam apenas de uma única localidade e',nennhum_lugar,'não gostam de nenhuma destas localidades')