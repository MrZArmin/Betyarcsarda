const Discord = require('discord.js')

module.exports={
    name:"óra",
    description:'Jelenlegi óra, guess, what',
    execute(message, args){
        message.channel.bulkDelete(1)
        var currentdate = new Date();
        
        var nap = currentdate.getDay();
        var ora = currentdate.getHours();
        var perc = currentdate.getMinutes();

        //Első óra
        var elso1 = new Date();
        elso1.setHours(8);
        elso1.setMinutes(30);

        var elso2 = new Date();
        elso2.setHours(9);
        elso2.setMinutes(10);

        //Második óra
        var masodik1 = new Date();
        masodik1.setHours(9);
        masodik1.setMinutes(20);

        var masodik2 = new Date();
        masodik2.setHours(10);
        masodik2.setMinutes(5);
        
        //Harmadik óra
        var harmadik1 = new Date();
        harmadik1.setHours(10);
        harmadik1.setMinutes(15);

        var harmadik2 = new Date();
        harmadik2.setHours(11);
        harmadik2.setMinutes(0);

        //Negyedik óra
        var negyedik1 = new Date();
        negyedik1.setHours(11);
        negyedik1.setMinutes(10);

        var negyedik2 = new Date();
        negyedik2.setHours(11);
        negyedik2.setMinutes(55);

        //Ötödik óra
        var ötödik1 = new Date();
        ötödik1.setHours(12);
        ötödik1.setMinutes(10);

        var ötödik2 = new Date();
        ötödik2.setHours(12);
        ötödik2.setMinutes(55);

        //Hatodik óra
        var hatodik1 = new Date();
        hatodik1.setHours(13);
        hatodik1.setMinutes(5);

        var hatodik2 = new Date();
        hatodik2.setHours(13);
        hatodik2.setMinutes(50);

        //Hetedik óra
        var hetedik1 = new Date();
        hetedik1.setHours(14);
        hetedik1.setMinutes(0);

        var hetedik2 = new Date();
        hetedik2.setHours(14);
        hetedik2.setMinutes(45);


        
      
    
        
        
        switch (nap) {
            //HÉTFŐ-----------------------------------------------------------------------------------------------------------------------
            case 1:
                //első
                if ( (elso1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < elso2.getTime())){
                    var kulonbseg = (((elso2 - currentdate)/1000)/60);
                    const w1 = new Discord.MessageEmbed()
                        .setTitle("Hétfő nulladik")
                        .addField("Jelenlegi óra", "Tesi")
                        .addField("Szünetig hátralevő idő", kulonbseg + " perc" )
                        .addField("Következő óra", "Töri")

                    message.channel.send(w1);
                }

                //második
                else if ((masodik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < masodik2.getTime())){
                    var kulonbseg2 = (((masodik2.getTime() - currentdate.getTime())/1000)/60);
                    const w2 = new Discord.MessageEmbed()
                        .setTitle("Hétfő első")
                        .addField("Jelenlegi óra", "Töri")
                        .addField("Szünetig hátralevő idő", kulonbseg2 + " perc" )
                        .addField("Következő óra", "Fizika")
                        .setColor(0x196F3D)

                    message.channel.send(w2);
                    
                }

                //harmadik
                else if ((harmadik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < harmadik2.getTime())){
                    var kulonbseg3 = (((harmadik2.getTime() - currentdate.getTime())/1000)/60);
                    const w3 = new Discord.MessageEmbed()
                        .setTitle("Hétfő második")
                        .addField("Jelenlegi óra", "Fizka")
                        .addField("Szünetig hátralevő idő", kulonbseg3 + " perc" )
                        .addField("Következő óra", "Német")
                        .setColor(0x196F3D)

                    message.channel.send(w3);
                    
                }

                //negyedik
                else if ((negyedik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < negyedik2.getTime())){
                    var kulonbseg4 = (((negyedik2.getTime() - currentdate.getTime())/1000)/60);
                    const w4 = new Discord.MessageEmbed()
                        .setTitle("Hétfő harmadik")
                        .addField("Jelenlegi óra", "Német")
                        .addField("Szünetig hátralevő idő", kulonbseg4 + " perc" )
                        .addField("Következő óra", "Irodalom")
                        .setColor(0x196F3D)

                    message.channel.send(w4);
                    
                }

                //ötödik
                else if ((ötödik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < ötödik2.getTime())){
                    var kulonbseg5 = (((ötödik2.getTime() - currentdate.getTime())/1000)/60);
                    const w5 = new Discord.MessageEmbed()
                        .setTitle("Hétfő negyedik")
                        .addField("Jelenlegi óra", "Irodalom")
                        .addField("Szünetig hátralevő idő", kulonbseg5 + " perc" )
                        .addField("Következő óra", "Matek")
                        .setColor(0x196F3D)

                    message.channel.send(w5);
                    
                }

                //hatodik
                else if ((hatodik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < hatodik2.getTime())){
                    var kulonbseg6 = (((hatodik2.getTime() - currentdate.getTime())/1000)/60);
                    const w6 = new Discord.MessageEmbed()
                        .setTitle("Hétfő ötödik")
                        .addField("Jelenlegi óra", "Matek")
                        .addField("Szünetig hátralevő idő", kulonbseg6 + " perc" )
                        .addField("Következő óra", "Angol")
                        .setColor(0x196F3D)
                        

                    message.channel.send(w6);
                    
                }
                //hetedik
                else if ((hetedik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < hetedik2.getTime())) {
                    
                    var kulonbseg7 = (((hetedik2.getTime() - currentdate.getTime())/1000)/60);
                    const w7 = new Discord.MessageEmbed()
                        .setTitle("Hétfő hatodik")
                        .addField("Jelenlegi óra", "Angol")
                        .addField("Szünetig hátralevő idő", kulonbseg7 + " perc" )
                        .setColor(0x196F3D)
                        

                    message.channel.send(w7);
                }
            
            break;




            //KEDD-----------------------------------------------------------------------------------------------------------------------

            case 1:
                //első
                if ( (elso1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < elso2.getTime())){
                    var kulonbseg = (((elso2 - currentdate)/1000)/60);
                    const w1 = new Discord.MessageEmbed()
                        .setTitle("Kedd nulladik")
                        .addField("Jelenlegi óra", "Ofői/Matek")
                        .addField("Szünetig hátralevő idő", kulonbseg + " perc" )
                        .addField("Következő óra", "Angol")

                    message.channel.send(w1);
                }

                //második
                else if ((masodik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < masodik2.getTime())){
                    var kulonbseg2 = (((masodik2.getTime() - currentdate.getTime())/1000)/60);
                    const w2 = new Discord.MessageEmbed()
                        .setTitle("Kedd első")
                        .addField("Jelenlegi óra", "Angol")
                        .addField("Szünetig hátralevő idő", kulonbseg2 + " perc" )
                        .addField("Következő óra", "Nyelvtan")
                        .setColor(0x196F3D)

                    message.channel.send(w2);
                    
                }

                //harmadik
                else if ((harmadik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < harmadik2.getTime())){
                    var kulonbseg3 = (((harmadik2.getTime() - currentdate.getTime())/1000)/60);
                    const w3 = new Discord.MessageEmbed()
                        .setTitle("Kedd második")
                        .addField("Jelenlegi óra", "Nyelvtan")
                        .addField("Szünetig hátralevő idő", kulonbseg3 + " perc" )
                        .addField("Következő óra", "Ének")
                        .setColor(0x196F3D)

                    message.channel.send(w3);
                    
                }

                //negyedik
                else if ((negyedik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < negyedik2.getTime())){
                    var kulonbseg4 = (((negyedik2.getTime() - currentdate.getTime())/1000)/60);
                    const w4 = new Discord.MessageEmbed()
                        .setTitle("Kedd harmadik")
                        .addField("Jelenlegi óra", "Ének")
                        .addField("Szünetig hátralevő idő", kulonbseg4 + " perc" )
                        .addField("Következő óra", "Infó")
                        .setColor(0x196F3D)

                    message.channel.send(w4);
                    
                }

                //ötödik
                else if ((ötödik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < ötödik2.getTime())){
                    var kulonbseg5 = (((ötödik2.getTime() - currentdate.getTime())/1000)/60);
                    const w5 = new Discord.MessageEmbed()
                        .setTitle("Kedd negyedik")
                        .addField("Jelenlegi óra", "Infó")
                        .addField("Szünetig hátralevő idő", kulonbseg5 + " perc" )
                        .addField("Következő óra", "Média")
                        .setColor(0x196F3D)

                    message.channel.send(w5);
                    
                }

                //hatodik
                else if ((hatodik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < hatodik2.getTime())){
                    var kulonbseg6 = (((hatodik2.getTime() - currentdate.getTime())/1000)/60);
                    const w6 = new Discord.MessageEmbed()
                        .setTitle("Kedd ötödik")
                        .addField("Jelenlegi óra", "Média")
                        .addField("Szünetig hátralevő idő", kulonbseg6 + " perc" )
                        .addField("Következő óra", "Tesi")
                        .setColor(0x196F3D)
                        

                    message.channel.send(w6);
                    
                }
                //hetedik
                else if ((hetedik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < hetedik2.getTime())) {
                    
                    var kulonbseg7 = (((hetedik2.getTime() - currentdate.getTime())/1000)/60);
                    const w7 = new Discord.MessageEmbed()
                        .setTitle("Kedd hatodik")
                        .addField("Jelenlegi óra", "Tesi")
                        .addField("Szünetig hátralevő idő", kulonbseg7 + " perc" )
                        .setColor(0x196F3D)
                        

                    message.channel.send(w7);
                }
            
            break;
            
            


            //SZERDA-----------------------------------------------------------------------------------------------------------------------
            case 3:
                //első
                if ( (elso1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < elso2.getTime())){
                    var kulonbseg = (((elso2 - currentdate)/1000)/60);
                    const w1 = new Discord.MessageEmbed()
                        .setTitle("Szerda nulladik")
                        .addField("Jelenlegi óra", "Biosz")
                        .addField("Szünetig hátralevő idő", kulonbseg + " perc" )
                        .addField("Következő óra", "INfó")

                    message.channel.send(w1);
                }

                //második
                else if ((masodik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < masodik2.getTime())){
                    var kulonbseg2 = (((masodik2.getTime() - currentdate.getTime())/1000)/60);
                    const w2 = new Discord.MessageEmbed()
                        .setTitle("Szerda első")
                        .addField("Jelenlegi óra", "Infó")
                        .addField("Szünetig hátralevő idő", kulonbseg2 + " perc" )
                        .addField("Következő óra", "Töri")
                        .setColor(0x196F3D)

                    message.channel.send(w2);
                    
                }

                //harmadik
                else if ((harmadik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < harmadik2.getTime())){
                    var kulonbseg3 = (((harmadik2.getTime() - currentdate.getTime())/1000)/60);
                    const w3 = new Discord.MessageEmbed()
                        .setTitle("Szerda második")
                        .addField("Jelenlegi óra", "Töri")
                        .addField("Szünetig hátralevő idő", kulonbseg3 + " perc" )
                        .addField("Következő óra", "Angol")
                        .setColor(0x196F3D)

                    message.channel.send(w3);
                    
                }

                //negyedik
                else if ((negyedik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < negyedik2.getTime())){
                    var kulonbseg4 = (((negyedik2.getTime() - currentdate.getTime())/1000)/60);
                    const w4 = new Discord.MessageEmbed()
                        .setTitle("Szerda harmadik")
                        .addField("Jelenlegi óra", "Angol")
                        .addField("Szünetig hátralevő idő", kulonbseg4 + " perc" )
                        .addField("Következő óra", "Irodalom")
                        .setColor(0x196F3D)

                    message.channel.send(w4);
                    
                }

                //ötödik
                else if ((ötödik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < ötödik2.getTime())){
                    var kulonbseg5 = (((ötödik2.getTime() - currentdate.getTime())/1000)/60);
                    const w5 = new Discord.MessageEmbed()
                        .setTitle("Szerda negyedik")
                        .addField("Jelenlegi óra", "Irodalom")
                        .addField("Szünetig hátralevő idő", kulonbseg5 + " perc" )
                        .addField("Következő óra", "Matekfakt")
                        .setColor(0x196F3D)

                    message.channel.send(w5);
                    
                }

                //hatodik
                else if ((hatodik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < hatodik2.getTime())){
                    var kulonbseg6 = (((hatodik2.getTime() - currentdate.getTime())/1000)/60);
                    const w6 = new Discord.MessageEmbed()
                        .setTitle("Szerda ötödik")
                        .addField("Jelenlegi óra", "Matekfakt")
                        .addField("Szünetig hátralevő idő", kulonbseg6 + " perc" )
                        .setColor(0x196F3D)
                        

                    message.channel.send(w6);
                    
                }
            
            break;
        
            
        

        
            //CSÜTÖRTÖK-----------------------------------------------------------------------------------------------------------------------
            case 4:
                //Első
                if ((masodik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < masodik2.getTime())){
                    var kulonbseg2 = (((masodik2.getTime() - currentdate.getTime())/1000)/60);
                    const w1 = new Discord.MessageEmbed()
                        .setTitle("Csütörtök első")
                        .addField("Jelenlegi óra", "Etika")
                        .addField("Szünetig hátralevő idő", `${kulonbseg2} perc` )
                        .addField("Következő óra", "Tesi")
                        .setColor(0x196F3D)

                    message.channel.send(w1);
                
                }

                //Második
                else if ((harmadik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < harmadik2.getTime())){
                    var kulonbseg3 = (((harmadik2.getTime() - currentdate.getTime())/1000)/60);
                    const w2 = new Discord.MessageEmbed()
                        .setTitle("Csütörtök második")
                        .addField("Jelenlegi óra", "Tesi")
                        .addField("Szünetig hátralevő idő", kulonbseg3 + " perc" )
                        .addField("Következő óra", "Matek")
                        .setColor(0x196F3D)

                    message.channel.send(w2);
                    
                }

                //Harmadik
                else if ((negyedik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < negyedik2.getTime())){
                    var kulonbseg4 = (((negyedik2.getTime() - currentdate.getTime())/1000)/60);
                    const w3 = new Discord.MessageEmbed()
                        .setTitle("Csütörtök harmadik")
                        .addField("Jelenlegi óra", "Matek")
                        .addField("Szünetig hátralevő idő", kulonbseg4 + " perc" )
                        .addField("Következő óra", "Német")
                        .setColor(0x196F3D)

                    message.channel.send(w3);
                    
                }

                //Negyedik
                else if ((ötödik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < ötödik2.getTime())){
                    var kulonbseg5 = (((ötödik2.getTime() - currentdate.getTime())/1000)/60);
                    const w4 = new Discord.MessageEmbed()
                        .setTitle("Csütörtök negyedik")
                        .addField("Jelenlegi óra", "Német")
                        .addField("Szünetig hátralevő idő", kulonbseg5 + " perc" )
                        .addField("Következő óra", "Angol")
                        .setColor(0x196F3D)

                    message.channel.send(w4);
                    
                }

                //Ötödik
                else if ((hatodik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < hatodik2.getTime())){
                    var kulonbseg6 = (((hatodik2.getTime() - currentdate.getTime())/1000)/60);
                    const w5 = new Discord.MessageEmbed()
                        .setTitle("Csütörtök ötödik")
                        .addField("Jelenlegi óra", "Angol")
                        .addField("Szünetig hátralevő idő", kulonbseg6 + " perc" )
                        .addField("Következő óra"," Fizika")
                        .setColor(0x196F3D)
                        

                    message.channel.send(w5);
                }

                //Hatodik
                else if((hetedik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < hetedik2.getTime())){
                    var kulonbseg7 = (((hetedik2.getTime()-currentdate.getTime())/1000)/60);
                    const w6 = new Discord.MessageEmbed()
                        .setTitle("Csütörtök hetedik")
                        .addField("Jelenlegi óra", "Fizika")
                        .addField("Szünetig hátralevő idő", kulonbseg7 + " perc" )
                        .setColor(0x196F3D)
                    message.channel.send(w6);   
                }
            
            break;





            //PÉNTEK------------------------------------------------------------------------------
            case 1:
                //első
                if ( (elso1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < elso2.getTime())){
                    var kulonbseg = (((elso2 - currentdate)/1000)/60);
                    const w1 = new Discord.MessageEmbed()
                        .setTitle("Péntek nulladik")
                        .addField("Jelenlegi óra", "Német")
                        .addField("Szünetig hátralevő idő", kulonbseg + " perc" )
                        .addField("Következő óra", "Angol")

                    message.channel.send(w1);
                }

                //második
                else if ((masodik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < masodik2.getTime())){
                    var kulonbseg2 = (((masodik2.getTime() - currentdate.getTime())/1000)/60);
                    const w2 = new Discord.MessageEmbed()
                        .setTitle("Péntek első")
                        .addField("Jelenlegi óra", "Angol")
                        .addField("Szünetig hátralevő idő", kulonbseg2 + " perc" )
                        .addField("Következő óra", "Biológia")
                        .setColor(0x196F3D)

                    message.channel.send(w2);
                    
                }

                //harmadik
                else if ((harmadik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < harmadik2.getTime())){
                    var kulonbseg3 = (((harmadik2.getTime() - currentdate.getTime())/1000)/60);
                    const w3 = new Discord.MessageEmbed()
                        .setTitle("Péntek második")
                        .addField("Jelenlegi óra", "Biológia")
                        .addField("Szünetig hátralevő idő", kulonbseg3 + " perc" )
                        .addField("Következő óra", "Irodalom")
                        .setColor(0x196F3D)

                    message.channel.send(w3);
                    
                }

                //negyedik
                else if ((negyedik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < negyedik2.getTime())){
                    var kulonbseg4 = (((negyedik2.getTime() - currentdate.getTime())/1000)/60);
                    const w4 = new Discord.MessageEmbed()
                        .setTitle("Péntek harmadik")
                        .addField("Jelenlegi óra", "Irodalom")
                        .addField("Szünetig hátralevő idő", kulonbseg4 + " perc" )
                        .addField("Következő óra", "Matek")
                        .setColor(0x196F3D)

                    message.channel.send(w4);
                    
                }

                //ötödik
                else if ((ötödik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < ötödik2.getTime())){
                    var kulonbseg5 = (((ötödik2.getTime() - currentdate.getTime())/1000)/60);
                    const w5 = new Discord.MessageEmbed()
                        .setTitle("Péntek negyedik")
                        .addField("Jelenlegi óra", "Matek")
                        .addField("Szünetig hátralevő idő", kulonbseg5 + " perc" )
                        .addField("Következő óra", "Töri")
                        .setColor(0x196F3D)

                    message.channel.send(w5);
                    
                }

                //hatodik
                else if ((hatodik1.getTime() < currentdate.getTime()) && ( currentdate.getTime() < hatodik2.getTime())){
                    var kulonbseg6 = (((hatodik2.getTime() - currentdate.getTime())/1000)/60);
                    const w6 = new Discord.MessageEmbed()
                        .setTitle("Péntek ötödik")
                        .addField("Jelenlegi óra", "Töri")
                        .addField("Szünetig hátralevő idő", kulonbseg6 + " perc" )
                        
                        .setColor(0x196F3D)
                        

                    message.channel.send(w6);
                    
                }
            
        
            
         
                   
            break;
        }
    }
}