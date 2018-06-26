export function setDate ()
{
	var d = new Date();
	var ret = "";
	return ret + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
}
