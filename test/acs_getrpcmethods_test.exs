defmodule ACSGetRPCMethodsTest do
  use ExUnit.Case
  import PathHelpers
  import RequestSenders
  doctest ACS

  test "plain GetRPCMethods" do
    Application.delete_env(:acs_ex, :session_script)
    assert Supervisor.count_children(:session_supervisor).active == 0
    {:ok,resp,cookie} = sendFile(fixture_path("informs/plain1"))
    assert resp.body == readFixture!(fixture_path("informs/plain1_response"))
    assert resp.status_code == 200
    {:ok,resp,cookie} = sendFile(fixture_path("acs/getrpcmethods1"), cookie)
    assert resp.body == readFixture!(fixture_path("acs/getrpcmethods1_response"))
    assert resp.status_code == 200
    {:ok,resp,_} = sendStr("",cookie)
    assert resp.body == ""
    assert resp.status_code == 200
  end

end
