

function Aff_text (id)
{	
	var text = "";

	if (id) {
		switch (id)
		{
			case "epaule":
				text = "L'épaule : <br><br> (nom féminin) C'est la région morphologique se situant à la jonction du tronc avec le membre supérieur. Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain. Elle permet d'orienter le membre supérieur dans l'espace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l'environnement situé à sa portée.";
			break;

			case "genou":
					text = "Le genou : <br><br>  C'est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l'articulation fémoro-patellaire et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des mouvements du genou. Le tissu élastique fin, le cartilage, protège l'os et fait en sorte que les surfaces de l'articulation glissent facilement les unes contre les autres.";
				
				break;

			case "hanche":
				text = "La hanche: <br><br> Ou articulation coxo-fémorale est une articulation (énarthrose) qui permet de joindre la cuisse au bassin. Elle met en jeu deux os : l'os iliaque et le fémur.";
			break;

			case "pied":
				text = "Le pied: <br><br> C'est la partie distale du membre inférieur de l'homme. Il est relié à la jambe par l'articulation de la cheville. Il supporte le poids du corps en position debout et permet la locomotion.Premier élément au contact avec le sol — en position anatomique —, Il assure un rôle essentiel dans l'équilibre, l'amortissement et la propulsion.";
			break;

			case "poignet":
				text = "Le poignet: <br><br> est une région du membre supérieur située entre la main et l'avant-bras, et contenant le carpe.Élément-clé pour le fonctionnement de la main, il permet les mouvements (c'est-à-dire les changements de place et d’orientation) de la main par rapport à l’avant-bras, transmet les forces appliquées de la main à l’avant-bras, permet d'adapter la capacité de flexion-extension maximale des doigts et de la préhension.";
			break;

			case "bras":
				text = "Le bras: <br><br> Chez l'homme et chez les bipèdes, les membres supérieurs (ou bras dans le langage courant) sont les deux membres reliés au tronc par le biais des épaules.Les membres supérieurs sont chacun constitués de trois segments : le bras, l'avant-bras et la main. L'articulation du coude relie le bras à l'avant-bras, et le poignet relie l'avant-bras à la main.";
			break;

			default :
			break;
		}
		document.getElementById ("description").innerHTML = text;
	}
}	