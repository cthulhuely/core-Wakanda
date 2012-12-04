/*
* This file is part of Wakanda software, licensed by 4D under
*  (i) the GNU General Public License version 3 (GNU GPL v3), or
*  (ii) the Affero General Public License version 3 (AGPL v3) or
*  (iii) a commercial license.
* This file remains the exclusive property of 4D and/or its licensors
* and is protected by national and international legislations.
* In any event, Licensee's compliance with the terms and conditions
* of the applicable license constitutes a prerequisite to any use of this file.
* Except as otherwise expressly stated in the applicable license,
* such license does not include any other license or rights on this file,
* 4D's and/or its licensors' trademarks and/or other proprietary rights.
* Consequently, no title, copyright or other proprietary rights
* other than those specified in the applicable license is granted.
*/
#ifndef __VRIAJSDEBUGGERSETTINGS__
#define __VRIAJSDEBUGGERSETTINGS__

#include "JSDebugger/Interfaces/CJSWDebuggerFactory.h"


class VRIAServerSolution;


class VJSDebuggerSettings :
	public XBOX::VObject,
#if 0//!defined(WKA_USE_UNIFIED_DBG)
	public IJSWDebuggerSettings
#else
	public IWAKDebuggerSettings
#endif
{
	public :

		VJSDebuggerSettings ( VRIAServerSolution* inServerSolution );
		virtual ~VJSDebuggerSettings ( );

		XBOX::VError Init ( );

		virtual bool NeedsAuthentication ( ) const;
		virtual bool UserCanDebug ( const UniChar* inUserName, const UniChar* inUserPassword ) const;
		virtual bool UserCanDebug(IAuthenticationInfos* inAuthenticationInfos) const;
		virtual bool HasDebuggerUsers ( ) const;

	private :

		VRIAServerSolution*					fServerSolution;
		// UUIDs of groups that can access JS debugger functionlaity
		std::vector<XBOX::VUUID>			fDebuggerGroups;
		bool								fNeedsAuthentication; // true by default

		VJSDebuggerSettings ( );
};

#endif
