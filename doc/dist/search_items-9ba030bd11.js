searchNodes=[{"doc":"Request router for CPE-&gt;ACS","ref":"ACS.html","title":"ACS","type":"module"},{"doc":"Returns a specification to start this module under a supervisor. See Supervisor .","ref":"ACS.html#child_spec/1","title":"ACS.child_spec/1","type":"function"},{"doc":"Callback implementation for Supervisor.init/1 .","ref":"ACS.html#init/1","title":"ACS.init/1","type":"function"},{"doc":"","ref":"ACS.html#start_link/1","title":"ACS.start_link/1","type":"function"},{"doc":"CWMP southbound interface handler plug. Matches requests to the root as CWMP requests and forwards them to ACS.Handlers.ACS.","ref":"ACS.ACSHandler.html","title":"ACS.ACSHandler","type":"module"},{"doc":"override af Plug.Router's call","ref":"ACS.ACSHandler.html#call/2","title":"ACS.ACSHandler.call/2","type":"function"},{"doc":"This module implements a simple wrapper around the cwmp_ex CWMP library parser. The request body is assumed to be a SOAP envelope containing one or more CWMP requests/responses.","ref":"ACS.CWMP.Parser.html","title":"ACS.CWMP.Parser","type":"module"},{"doc":"Just an init that must be here.","ref":"ACS.CWMP.Parser.html#init/1","title":"ACS.CWMP.Parser.init/1","type":"function"},{"doc":"Parses text/xml requests as CWMP requests/responses. The resulting CWMP requests and responses are returned so they can be set as the body_params field of the connection.","ref":"ACS.CWMP.Parser.html#parse/5","title":"ACS.CWMP.Parser.parse/5","type":"function"},{"doc":"Handles CWMP requests coming in over the CWMP southbound interface. Requests are parsed as SOAP CWMP envelopes and then used for the basis of the current provisioning tree. There are several possible request types as defined in the TR-069 specification. These are all just handled by the custom logic module. Some are part of basic ACS functionality and are handled here. This is the main ACS server loop corresponding to the old acs3.pm","ref":"ACS.Handlers.ACS.html","title":"ACS.Handlers.ACS","type":"module"},{"doc":"Callback implementation for Plug.call/2 .","ref":"ACS.Handlers.ACS.html#call/2","title":"ACS.Handlers.ACS.call/2","type":"function"},{"doc":"","ref":"ACS.Handlers.ACS.html#dispatch/2","title":"ACS.Handlers.ACS.dispatch/2","type":"function"},{"doc":"When our cwmp parser thows, we end up here. So when some CPE sends bogus xml, or half a record or whatever else they might do, this is where we capture that parser error from CWMP.Parser.","ref":"ACS.Handlers.ACS.html#handle_errors/2","title":"ACS.Handlers.ACS.handle_errors/2","type":"function"},{"doc":"Callback implementation for Plug.init/1 .","ref":"ACS.Handlers.ACS.html#init/1","title":"ACS.Handlers.ACS.init/1","type":"function"},{"doc":"","ref":"ACS.RealIPSetter.html","title":"ACS.RealIPSetter","type":"module"},{"doc":"","ref":"ACS.RealIPSetter.html#call/2","title":"ACS.RealIPSetter.call/2","type":"function"},{"doc":"","ref":"ACS.RealIPSetter.html#init/1","title":"ACS.RealIPSetter.init/1","type":"function"},{"doc":"The actual ACS-CPE session is handled here. A session is initiated when an Inform arrives, therefore the init function takes a parsed Inform request as an argument. We let the supervisor handle the main session handler, and then we register new sessions with the session_begins method","ref":"ACS.Session.html","title":"ACS.Session","type":"module"},{"doc":"Returns a specification to start this module under a supervisor. See Supervisor .","ref":"ACS.Session.html#child_spec/1","title":"ACS.Session.child_spec/1","type":"function"},{"doc":":verify_remotehost - verifies the remote_host by comparing it to the one in the state.device_id :process_message - Processes a message from the plug. message is the CWMP.Protocol version of the parsed request sent into the plug.","ref":"ACS.Session.html#handle_call/3","title":"ACS.Session.handle_call/3","type":"function"},{"doc":"Used for :trap_exit signal with reply/2 that this is over kill me?","ref":"ACS.Session.html#handle_info/2","title":"ACS.Session.handle_info/2","type":"function"},{"doc":"","ref":"ACS.Session.html#has_inform?/1","title":"ACS.Session.has_inform?/1","type":"function"},{"doc":"Callback implementation for GenServer.init/1 .","ref":"ACS.Session.html#init/1","title":"ACS.Session.init/1","type":"function"},{"doc":"when stuff is sent into this session, like CWMP messages or other stuff.","ref":"ACS.Session.html#process_message/2","title":"ACS.Session.process_message/2","type":"function"},{"doc":"Script message. This means the a scripting process wants a response to a request we just put the request in the plug queue and answer no_reply here.","ref":"ACS.Session.html#script_command/2","title":"ACS.Session.script_command/2","type":"function"},{"doc":"this is spawn_linked and should apply the call to the module","ref":"ACS.Session.html#session_prestart/6","title":"ACS.Session.session_prestart/6","type":"function"},{"doc":"For the supervisor. Ths supervisors starts the sessions from start_child","ref":"ACS.Session.html#start_link/2","title":"ACS.Session.start_link/2","type":"function"},{"doc":"When something non-Inform'ish is sent into the session we need to find and verify the session.","ref":"ACS.Session.html#verify_session/2","title":"ACS.Session.verify_session/2","type":"function"},{"doc":"This is the main vendor specific logic module, and the one you want to write if you have stuff that needs to happen in your specific environment. In the real world you would write a new module that starts acs_ex using the child_spec, giving it the name of your handler module. That would make acs_ex use your module when initiating the script session. An example of this is available right next to this module.","ref":"ACS.Session.Script.Vendor.html","title":"ACS.Session.Script.Vendor","type":"module"},{"doc":"Callback implementation for ACS.SessionScript.session_filter/2 .","ref":"ACS.Session.Script.Vendor.html#session_filter/2","title":"ACS.Session.Script.Vendor.session_filter/2","type":"function"},{"doc":"Callback implementation for ACS.SessionScript.session_start/3 .","ref":"ACS.Session.Script.Vendor.html#session_start/3","title":"ACS.Session.Script.Vendor.session_start/3","type":"function"},{"doc":"","ref":"ACS.Session.Script.Vendor.Helpers.html","title":"ACS.Session.Script.Vendor.Helpers","type":"module"},{"doc":"args must be a map with keys: &quot;object_name&quot; where the object name ends with .","ref":"ACS.Session.Script.Vendor.Helpers.html#addObject/2","title":"ACS.Session.Script.Vendor.Helpers.addObject/2","type":"function"},{"doc":"Sends a GetOptions request info the session. Args is a commandkey, just a string","ref":"ACS.Session.Script.Vendor.Helpers.html#cancelTransfer/2","title":"ACS.Session.Script.Vendor.Helpers.cancelTransfer/2","type":"function"},{"doc":"Sends a ChangeDUState request info the session. args is a map containing the keys needed to generate at CWMP.Protocol.Messages.ChangeDUState structure. This means that the elements in the operations list need to be one (or more) of the struct types: %CWMP.Protocol.Messages.InstallOpStruct{url: url, uuid: uuid, username: user, password: pass, execution_env_ref: eer} %CWMP.Protocol.Messages.UpdateOpStruct{url: url, uuid: uuid, username: user, password: pass, version: ver} %CWMP.Protocol.Messages.UninstallOpStruct{url: url, uuid: uuid, execution_env_ref: eer} For example: commandkey ( May be &quot;&quot; ) operations : [ % CWMP.Protocol.Messages.InstallOpStruct { url uuid username ( May be &quot;&quot; ) password ( May be &quot;&quot; ) execution_env_ref } ]","ref":"ACS.Session.Script.Vendor.Helpers.html#changeDUState/2","title":"ACS.Session.Script.Vendor.Helpers.changeDUState/2","type":"function"},{"doc":"args must be a map with keys: &quot;object_name&quot; where the object name ends with . An optional parameter_key can be given Returns a CWMP.Protocol.Messages.AddObjectResponse","ref":"ACS.Session.Script.Vendor.Helpers.html#deleteObject/2","title":"ACS.Session.Script.Vendor.Helpers.deleteObject/2","type":"function"},{"doc":"Sends a Download request info the session. args is a map containing the keys needed to generate at CWMP.Protocol.Messages.Download structure. i.e. &quot;url&quot;, &quot;filetype&quot;, &quot;filesize&quot; at least.","ref":"ACS.Session.Script.Vendor.Helpers.html#download/2","title":"ACS.Session.Script.Vendor.Helpers.download/2","type":"function"},{"doc":"Extracts the Parameters from an inform. Returns a map with parameters and values.","ref":"ACS.Session.Script.Vendor.Helpers.html#extract_params/1","title":"ACS.Session.Script.Vendor.Helpers.extract_params/1","type":"function"},{"doc":"Sends a FactoryReset request info the session.","ref":"ACS.Session.Script.Vendor.Helpers.html#factoryReset/1","title":"ACS.Session.Script.Vendor.Helpers.factoryReset/1","type":"function"},{"doc":"Sends an GetAllQueuedTransfers request info the session.","ref":"ACS.Session.Script.Vendor.Helpers.html#getAllQueuedTransfers/1","title":"ACS.Session.Script.Vendor.Helpers.getAllQueuedTransfers/1","type":"function"},{"doc":"Sends a GetOptions request info the session. Args is the option name, just a string","ref":"ACS.Session.Script.Vendor.Helpers.html#getOptions/2","title":"ACS.Session.Script.Vendor.Helpers.getOptions/2","type":"function"},{"doc":"args will be a list of string with paramter names for which you want to retrieve attributes. Return value will be a CWMP.Protocol.Messages.GetParameterAttributesResponse struct","ref":"ACS.Session.Script.Vendor.Helpers.html#getParameterAttributes/2","title":"ACS.Session.Script.Vendor.Helpers.getParameterAttributes/2","type":"function"},{"doc":"args will be a maps with keys &quot;parameter_path&quot; and &quot;next_level&quot;","ref":"ACS.Session.Script.Vendor.Helpers.html#getParameterNames/2","title":"ACS.Session.Script.Vendor.Helpers.getParameterNames/2","type":"function"},{"doc":"args will be a list of names for the actual cwmp request.","ref":"ACS.Session.Script.Vendor.Helpers.html#getParameterValues/2","title":"ACS.Session.Script.Vendor.Helpers.getParameterValues/2","type":"function"},{"doc":"Sends a GetQueuedTransfers request info the session.","ref":"ACS.Session.Script.Vendor.Helpers.html#getQueuedTransfers/1","title":"ACS.Session.Script.Vendor.Helpers.getQueuedTransfers/1","type":"function"},{"doc":"GetRPCMethods, no args","ref":"ACS.Session.Script.Vendor.Helpers.html#getRPCMethods/1","title":"ACS.Session.Script.Vendor.Helpers.getRPCMethods/1","type":"function"},{"doc":"Determines if an EventStruct of an Inform contains a specific event.","ref":"ACS.Session.Script.Vendor.Helpers.html#has_event?/2","title":"ACS.Session.Script.Vendor.Helpers.has_event?/2","type":"function"},{"doc":"call the session server with the script_commmand: reboot","ref":"ACS.Session.Script.Vendor.Helpers.html#reboot/1","title":"ACS.Session.Script.Vendor.Helpers.reboot/1","type":"function"},{"doc":"Sends a ScheduleDownload request info the session. args is a map containing the keys needed to generate at CWMP.Protocol.Messages.ScheduleDownload structure. i.e. commandkey ( May be empty ) filetype url username ( Optional ) password ( Optional ) filesize target_filename ( Optional ) timewindowlist [ %{ window_start window_end window_mode user_message ( May be &quot;&quot; ) max_retries } ]","ref":"ACS.Session.Script.Vendor.Helpers.html#scheduleDownload/2","title":"ACS.Session.Script.Vendor.Helpers.scheduleDownload/2","type":"function"},{"doc":"Sends a ScheduleInform request info the session.","ref":"ACS.Session.Script.Vendor.Helpers.html#scheduleInform/2","title":"ACS.Session.Script.Vendor.Helpers.scheduleInform/2","type":"function"},{"doc":"","ref":"ACS.Session.Script.Vendor.Helpers.html#session_call/2","title":"ACS.Session.Script.Vendor.Helpers.session_call/2","type":"function"},{"doc":"Get the current list of ACS messages, i.e. TransferComplete aso from the session.","ref":"ACS.Session.Script.Vendor.Helpers.html#session_messages/1","title":"ACS.Session.Script.Vendor.Helpers.session_messages/1","type":"function"},{"doc":"args will be a list of maps each with keys &quot;name&quot;, &quot;notification_change&quot;, &quot;notification&quot;, &quot;accesslist_change&quot; and &quot;accesslist&quot;.","ref":"ACS.Session.Script.Vendor.Helpers.html#setParameterAttributes/2","title":"ACS.Session.Script.Vendor.Helpers.setParameterAttributes/2","type":"function"},{"doc":"args must be a list of maps with &quot;name&quot;, &quot;type&quot;, &quot;value&quot;","ref":"ACS.Session.Script.Vendor.Helpers.html#setParameterValues/2","title":"ACS.Session.Script.Vendor.Helpers.setParameterValues/2","type":"function"},{"doc":"Sends a SetVouchers request info the session.","ref":"ACS.Session.Script.Vendor.Helpers.html#setVouchers/2","title":"ACS.Session.Script.Vendor.Helpers.setVouchers/2","type":"function"},{"doc":"Sends an Upload request info the session. Args is a map containing at least commandkey, filetype and url out of the following possible keys, here listed with defaults: commandkey : &quot;&quot; , filetype : nil , url : nil , username : &quot;&quot; , password : &quot;&quot; , delay_seconds : 0","ref":"ACS.Session.Script.Vendor.Helpers.html#upload/2","title":"ACS.Session.Script.Vendor.Helpers.upload/2","type":"function"},{"doc":"","ref":"ACS.Session.Supervisor.html","title":"ACS.Session.Supervisor","type":"module"},{"doc":"Returns a specification to start this module under a supervisor. See Supervisor .","ref":"ACS.Session.Supervisor.html#child_spec/1","title":"ACS.Session.Supervisor.child_spec/1","type":"function"},{"doc":"","ref":"ACS.Session.Supervisor.html#end_session/1","title":"ACS.Session.Supervisor.end_session/1","type":"function"},{"doc":"Callback implementation for DynamicSupervisor.init/1 .","ref":"ACS.Session.Supervisor.html#init/1","title":"ACS.Session.Supervisor.init/1","type":"function"},{"doc":"","ref":"ACS.Session.Supervisor.html#start_link/1","title":"ACS.Session.Supervisor.start_link/1","type":"function"},{"doc":"","ref":"ACS.Session.Supervisor.html#start_session/3","title":"ACS.Session.Supervisor.start_session/3","type":"function"},{"doc":"","ref":"ACS.Session.Supervisor.html#start_session/4","title":"ACS.Session.Supervisor.start_session/4","type":"function"},{"doc":"","ref":"ACS.SessionScript.html","title":"ACS.SessionScript","type":"behaviour"},{"doc":"","ref":"ACS.SessionScript.html#c:session_filter/2","title":"ACS.SessionScript.session_filter/2","type":"callback"},{"doc":"","ref":"ACS.SessionScript.html#c:session_start/3","title":"ACS.SessionScript.session_start/3","type":"callback"},{"doc":"","ref":"ACS.SessionScript.html#t:filter_response/0","title":"ACS.SessionScript.filter_response/0","type":"type"},{"doc":"An implementation of the Auto Configuration Server mentioned in the TR-069 spec. CWMP has the unfortunate effect of flipping the logic towards the CPE's. acs_ex aims to flip it back. It sets up a GenServer to handle sessions from CPE's. When a session starts an external handler that can be configured is called. This handler has one method, start_session (Meaning an Inform was seen). Seen from that handler, the logic is now shifted and you can just ask the GenServer for the stuff you need, like &quot;getParameterValues&quot;, &quot;setParameterValues&quot; aso, and the functions will return as were the synchroneous. So you write you own module that uses acs_ex as an application, and from that module you can write whatever it is you actually want to do with the CPE's based on type, firmware version and whatever else you can think up.","ref":"readme.html","title":"acs_ex","type":"extras"},{"doc":"Our config.exs would have an entry similar to this: config :acs_ex , :acs_port , 7547 # crypt stuff is needed beacuse the CPE&lt;&gt;ACS cookie is an encrypted one. config :acs_ex , crypt_keybase : &quot;31de9f7d766287c7565801f30babbd4f&quot; , crypt_cookie_salt : &quot;SomeSalt&quot; , crypt_signed_cookie_salt : &quot;SomeSignedSalt&quot; acs_ex uses Logger for logging, so setup a backend that suits you if you want to see what it is doing.","ref":"readme.html#configuration","title":"acs_ex - Configuration","type":"extras"},{"doc":"An example of how to use acs_ex can be found here","ref":"readme.html#examples","title":"acs_ex - Examples","type":"extras"}]