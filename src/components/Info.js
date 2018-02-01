import React from 'react';

class Info extends React.Component {
    render(){
        return (
            <main className="info">
                <div className="info-content">
                    <p className="info-content__heading">EVGENIY PAVLOV <span>1949 –</span></p>
                    <p className="info-content__text">Don’t even think about boiling those ribs! Above all else, boiling the meat causes it to lose all its flavor. If you just have to pre-cook your ribs before slapping them on the cooking grate, try steaming your slabs instead as this will help lock the flavor in. Before placing your ribs on the grate for Barbecuing or smoking, make sure you coat the metal with a generous helping of oil.
                    </p>
                    <img src={require("../images/addition/1974.jpg")} alt="" className="info-content__img"/>
                    <p className="info-content__text">Barbecue party tips can help a host put together an extraordinary event for family and friends. Eating outdoors is a favorite pastime enjoyed by everyone and planning the event can help make it more memorable and stress-free for the host. Big or small, a barbecue party requires an adequate amount of planning and preparation to ensure that everything is laid out properly.
                    </p>
                    <p className="info-content__text">And of course, don’t forget to pack those barbecue sauces and hot sauces to spice up your barbecue dishes. If you’re looking for something insanely different to give your barbecue that extra punch, visit www.InsaneChicken.com for their wide array of barbecue sauces, marinades and dry rubs. Treat yourself and your friends’ taste buds to their line of extremely hot products; they would definitely go well with a good beer. Now that’s what I call one unforgettable barbecue on the beach party!
                    </p>
                </div>
            </main>
        );
    }
}

export default Info