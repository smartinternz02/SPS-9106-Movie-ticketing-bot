<script>
  window.watsonAssistantChatOptions = {
      integrationID: "c1ea979c-47cf-436e-8cf7-dfbc7ba961ca", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "82b8b53d-bda2-40c4-b82c-acae4ac1c2f7", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
</script>