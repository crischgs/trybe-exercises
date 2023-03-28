let statusProcesso = 'reprovada';

switch (statusProcesso) {
    case 'aprovada':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera.');
        break;
    case 'reprovada':
        console.log('Infelizmente, vocẽ reprovou.');
        break;
    default:
        console.log('Informação incorreta.');
        break;
}