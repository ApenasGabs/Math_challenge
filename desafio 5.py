tres_locais = 30 #tres_locais
yoshis_t = 450 #Yoshi's Island.yoshis_choco
choco_t = 330 #Chocolate Island. choco_
cookie_t = 340 #Cookie Mountain. cookie
yoshis_choco_t =200 #Yoshi's Island e Chocolate Island.
yoshis_cookie_t = 180 #Yoshi's Island e Cookie Mountain.
choco_cookie_t = 100 #Chocolate Island e Cookie Mountain.
maxx = 1000
yoshis_choco = yoshis_choco_t - tres_locais
yoshis_cookie = yoshis_cookie_t - tres_locais
choco_cookie = choco_cookie_t - tres_locais
yoshis = yoshis_t -yoshis_choco -yoshis_cookie - tres_locais
choco = choco_t -yoshis_choco -choco_cookie - tres_locais
cookie = cookie_t -choco_cookie -yoshis_cookie - tres_locais
um_lugar = yoshis + choco + cookie + yoshis_choco
nennhum_lugar = maxx - (um_lugar + tres_locais + yoshis_choco + yoshis_cookie + choco_cookie) 
print(um_lugar,'gostam apenas de uma única localidade e',nennhum_lugar,'não gostam de nenhuma destas localidades')

