// Quando o documento estiver pronto (carregado)
$(document).ready(function(){ 
    // Quando o botão Enviar for clicado     
    $("#enviar").click(function(event){
        event.preventDefault(); // Impede que a página recarregue e apague o card
        
        // TRAVA DE VALIDAÇÃO
        if (!document.querySelector("form").checkValidity()) {
            document.querySelector("form").reportValidity(); 
            return; 
        }

        // Variáveis
        nome_time = $("#nome").val(); 
        localizacao = $("#localizacao").val();
        ano = $("#ano").val();
        qnt_sb = $("#qnt_sb").val();
        qnt_c = $("#qnt_c").val();
        img = $("#foto_id")[0].files[0]; 
        
        $("#cardes").append(`
        <div class="card">
            <img src="${URL.createObjectURL(img)}" alt="foto do time">
            <p>${nome_time}</p>
            <p>${localizacao}</p>
            <p>Ano: ${ano}</p>
            <p>Superbowls: ${qnt_sb}</p>
            <p>Conferência: ${qnt_c}</p>
            <input type="button" class="apagar" value="Apagar">        
        </div>
        `); 
        
        $("form")[0].reset();
    });
    
    $(document).on('click', '.apagar', function(){
        if(confirm("Deseja apagar mesmo?")){
            $(this).closest('.card').remove(); 
        }
    });       
});